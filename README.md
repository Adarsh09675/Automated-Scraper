# 🛒 Flipkart Apple Products Scraper

An automated **browser-based web scraping system** built with **Node.js and Playwright** that extracts Apple products from Flipkart. It handles dynamic content, lazy loading, popups, and pagination to export structured data into a professional CSV file.

---

## 🎯 Project Objective

To automate the process of browsing Flipkart and identifying **Apple products near ₹30,000**, eliminating the need for manual searching and enabling structured data collection for monitoring and deal discovery.

## ✨ Features

- **🚀 High Performance**: Uses Playwright's Chromium engine for fast and reliable scraping.
- **📄 Multi-page Pagination**: Automatically navigates through multiple search result pages.
- **🐢 Human-like Interaction**: Implements slow scrolling and random delays to bypass anti-bot detections.
- **🎯 Smart Filtering**: Specifically filters for products within the ₹27,000 – ₹33,000 range.
- **📊 Data Excellence**:
  - Extracts Name, Price, Product Link, Image URL, and Source.
  - Cleans and formats data (removes extra whitespace, handles currency symbols).
  - Sorts and ranks results from Highest to Lowest price.
- **💾 CSV Export**: Saves results to `src/data/apple_products_near_30000.csv`.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Automation**: [Playwright](https://playwright.dev/)
- **CSV Handling**: [csv-writer](https://www.npmjs.com/package/csv-writer)
- **File System**: `fs` (Node.js built-in)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v14+) installed. Check with:
```bash
node -v
```

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Adarsh09675/Automated-Scraper.git

# Navigate to the project folder
cd flipkart-scraper

# Install dependencies
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install chromium
```

---

## 🏃 How to Run

To start the scraping process, simply run:

```bash
npm start
```

### What happens?
1. An automated **Chromium** browser opens.
2. It searches Flipkart for "apple products" and closes any login popups.
3. It scrolls through pages to load all dynamic content.
4. It extracts, filters, and ranks the products.
5. Structured data is saved to `/src/data/apple_products_near_30000.csv`.

---

## 📂 Project Structure

```text
flipkart-scraper/
├── src/
│   ├── data/               # 📁 Extracted CSV files
│   └── scrape.js           # 🧠 Main scraping logic
├── package.json            # 📦 Project dependencies and scripts
└── README.md               # 📖 Project documentation
```

---

## 🚀 Use Cases

- **Product Monitoring**: Keep track of Apple inventory on Flipkart.
- **Price Tracking**: Identify the best times to buy based on price fluctuations.
- **Market Research**: Analyze competitor pricing and product availability.
- **Deal Discovery**: Quickly find products within a specific budget.

---

## ⚙️ Configuration

You can modify these parameters in `src/scrape.js`:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `MIN_PRICE` | Minimum price to filter | `27000` |
| `MAX_PRICE` | Maximum price to filter | `33000` |
| `MAX_PAGES` | Max pages to scrape | `10` |

---

## ⚠️ Important Notes & Disclaimer

- **Terms of Service**: Respect website terms of service and `robots.txt`.
- **Ethics**: This project is for **educational and research purposes only**. Avoid running the scraper too frequently to prevent server strain.
- **Maintenance**: Flipkart UI changes may require updates to the selectors in `src/scrape.js`.

---

## 🔮 Future Improvements

- [ ] Database integration (MongoDB / Supabase).
- [ ] Daily scheduled scraping (CRON jobs).
- [ ] Price history tracking with visualization.
- [ ] Email or WhatsApp alerts for price drops.

---
**Developed with ❤️ by Adarsh Mishra**
