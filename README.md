# 🛒 Flipkart Apple Products Scraper

A professional, automated web scraper built with **Node.js** and **Playwright** to extract Apple products from Flipkart. It focuses on finding the best deals within a specific price range and exports them into a clean, sorted CSV file.

## ✨ Features

- **🚀 High Performance**: Uses Playwright's Chromium engine for fast and reliable scraping.
- **📄 Multi-page Pagination**: Automatically navigates through multiple search result pages.
- **🐢 Human-like Interaction**: Implements slow scrolling and random delays to bypass anti-bot detections.
- **🎯 Smart Filtering**: Specifically filters for Apple products within a defined price range (Default: ₹27,000 - ₹33,000).
- **📊 Data Excellence**:
  - Extracts Name, Price, Product Link, Image URL, and Source.
  - Cleans and formats data (removes extra whitespace, handles currency symbols).
  - Sorts products from Highest to Lowest price.
- **💾 CSV Export**: Saves results to `src/data/apple_products_near_30000.csv` with a ranking system.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Automation**: [Playwright](https://playwright.dev/)
- **CSV Handling**: [csv-writer](https://www.npmjs.com/package/csv-writer)

---

## 🚀 Getting Started

Follow these steps to set up and run the scraper on your local machine.

### 1. Prerequisites

Ensure you have **Node.js** (v14 or higher) installed. You can check by running:
```bash
node -v
```

### 2. Installation

Clone the repository and install the necessary dependencies:

```bash
# Clone the repository
git clone https://github.com/Adarsh09675/Automated-Scraper.git

# Navigate to the project folder
cd flipkart-scraper

# Install dependencies
npm install
```

### 3. Install Playwright Browsers

Playwright requires specific browser binaries to run. Install them using:

```bash
npx playwright install chromium
```

---

## 🏃 How to Run

To start the scraping process, simply run:

```bash
npm start
```

### What happens next?
1. A **Chromium** browser window will open (headed mode).
2. The script will navigate to Flipkart and search for "apple products".
3. It will scroll through the pages, collect product data, and handle pagination.
4. Once finished, the browser will close automatically.
5. The results will be saved in: `src/data/apple_products_near_30000.csv`.

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

## ⚙️ Configuration

You can easily modify the scraping parameters in `src/scrape.js`:

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `MIN_PRICE` | Minimum price to filter | `27000` |
| `MAX_PRICE` | Maximum price to filter | `33000` |
| `MAX_PAGES` | Max pages to scrape | `10` |
| `headless` | Show/Hide browser UI | `false` |

---

## ⚠️ Disclaimer

This project is for **educational purposes only**. Web scraping may be against the Terms of Service of some websites. Please use it responsibly and respect `robots.txt` files. The developers are not responsible for any misuse of this tool.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
**Made with ❤️ by Adarsh**
