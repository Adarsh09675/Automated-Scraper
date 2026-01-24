const { chromium } = require("playwright");
const fs = require("fs");
const { createObjectCsvWriter } = require("csv-writer");

// 🔗 Apple products search page
const FLIPKART_URL =
  "https://www.flipkart.com/search?q=apple%20products&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";

// 🎯 Near ₹30k range
const MIN_PRICE = 27000;
const MAX_PRICE = 33000;

// Safety limit
const MAX_PAGES = 10;

// 🐢 Slow scroll
async function slowScroll(page, steps = 10, delay = 1500) {
  for (let i = 0; i < steps; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(delay);
  }
}

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 30 });

  const context = await browser.newContext({
    viewport: { width: 1366, height: 768 },
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  });

  const page = await context.newPage();

  console.log("Opening Flipkart Apple products search...");
  await page.goto(FLIPKART_URL, { waitUntil: "networkidle", timeout: 60000 });

  // ❌ Close login popup
  try {
    await page.waitForSelector("button._2KpZ6l._2doB4z", { timeout: 8000 });
    await page.click("button._2KpZ6l._2doB4z");
    await page.waitForTimeout(1500);
  } catch {}

  let allRawProducts = [];
  let pageCount = 0;

  while (pageCount < MAX_PAGES) {
    pageCount++;
    console.log(`\n📄 Scraping page ${pageCount}...`);

    const productCard = "div[data-id]";
    await page.waitForSelector(productCard, { timeout: 60000 });

    await slowScroll(page, 12, 1600);
    await page.waitForTimeout(2000);

    const rawProducts = await page.$$eval(productCard, cards =>
      cards.map(card => {
        const fullText = card.innerText;
        const link = card.querySelector("a[href]")?.href || null;
        const image = card.querySelector("img")?.src || null;
        return { fullText, link, image };
      })
    );

    console.log(`Products found on page ${pageCount}:`, rawProducts.length);
    allRawProducts.push(...rawProducts);

    // 🔎 Robust Next button finder (text-based)
    const nextBtn = page.locator("a").filter({ hasText: "Next" }).first();

    if ((await nextBtn.count()) === 0) {
      console.log("No more pages. Pagination finished.");
      break;
    }

    console.log("➡️ Moving to next page...");
    await Promise.all([
      nextBtn.click(),
      page.waitForLoadState("networkidle")
    ]);

    await page.waitForTimeout(2000 + Math.random() * 2000);
  }

  console.log("\nTotal raw products collected:", allRawProducts.length);

  // 🧠 Extract + clean + filter
  let final = allRawProducts
    .map(p => {
      const text = p.fullText.replace(/\n+/g, " ").trim();

      // ✅ Extract ALL prices and choose highest
      const priceMatches = text.match(/₹\s?[\d,]+/g);
      const price = priceMatches
        ? Math.max(...priceMatches.map(x => Number(x.replace(/[^0-9]/g, ""))))
        : null;

      // ✅ Extract Apple product name
      const nameMatch = text.match(/Apple[^₹]+/i);
      const name = nameMatch ? nameMatch[0].trim() : null;

      return {
        name,
        price,
        link: p.link,
        image: p.image,
        source: "Flipkart",
        scrapedAt: new Date().toISOString()
      };
    })
    .filter(
      p =>
        p.name &&
        p.price &&
        p.link &&
        p.name.toLowerCase().includes("apple") &&
        p.price >= MIN_PRICE &&
        p.price <= MAX_PRICE
    );

  console.log("\n🍎 Apple products near ₹30k found:", final.length);

  // 🔽 Sort High → Low
  final.sort((a, b) => b.price - a.price);

  // 🏷 Rank
  final = final.map((item, index) => ({
    rank: index + 1,
    ...item
  }));

  // 📁 Ensure data folder exists
  if (!fs.existsSync("data")) fs.mkdirSync("data");

  // 💾 Save CSV
  const csvWriter = createObjectCsvWriter({
    path: "data/apple_products_near_30000.csv",
    header: [
      { id: "rank", title: "Rank (High → Low)" },
      { id: "name", title: "Name" },
      { id: "price", title: "Price" },
      { id: "link", title: "Link" },
      { id: "image", title: "Image" },
      { id: "source", title: "Source" },
      { id: "scrapedAt", title: "Scraped At" }
    ]
  });

  await csvWriter.writeRecords(final);

  console.log("\n✅ CSV created → data/apple_products_near_30000.csv");

  await browser.close();
})();
