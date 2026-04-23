<<<<<<< HEAD
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
=======
# 🍎 Flipkart Apple Product Scraper (₹30,000 Range)

An automated **browser-based web scraping system** built using **Node.js and Playwright** that extracts Apple products from Flipkart priced around ₹30,000.  
The scraper handles **dynamic content, lazy loading, popups, and pagination**, then cleans and exports structured product data into a CSV file for monitoring and analysis.

---

## 🎯 Project Objective

To automate the process of browsing Flipkart and identifying **Apple products near ₹30,000**, eliminating the need for manual searching and enabling structured data collection for analysis and tracking.

---

## ✨ Features

- Automated Flipkart browsing using a real browser  
- Handles JavaScript-rendered and lazy-loaded content  
- Automatically closes login popups  
- Supports pagination across multiple result pages  
- Extracts product name, price, link, and image  
- Filters products within the ₹27,000–₹33,000 range  
- Sorts and ranks results  
- Exports data to CSV format  

---

## 🛠️ Tech Stack

- **Node.js** – runtime environment  
- **Playwright** – browser automation  
- **csv-writer** – CSV generation  
- **fs (File System)** – file handling  

---

## ⚙️ How It Works

1. Launches an automated Chromium browser  
2. Opens Flipkart Apple product search page  
3. Closes login popup if it appears  
4. Scrolls pages to load all products  
5. Extracts raw product information  
6. Cleans and parses product data  
7. Filters Apple products near ₹30,000  
8. Handles pagination automatically  
9. Sorts and ranks products  
10. Saves structured data to a CSV file  

---

## ▶️ Installation & Usage

Prerequisites

Make sure Node.js is installed:

```bash
node -v
npm -v

---
Step 1: Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Step 2: Install dependencies
npm install

Step 3: Install Playwright browsers
npx playwright install

Step 4: Run the scraper
node src/scrape.js

---

The browser will open automatically and start scraping.

## 📁 Output

After execution, a CSV file will be generated at:

/data/apple_products_near_30000.csv


The file contains:

Rank

Product name

Price

Product link

Image URL

Source

Scrape timestamp

You can open it using Excel, Google Sheets, or import it into any database.

🚀 Use Cases

Product monitoring

Price tracking

Market research

Deal discovery

E-commerce analysis

Learning browser automation and scraping

⚠️ Important Notes

Flipkart UI changes may require selector updates.

Avoid running the scraper too frequently.

Respect website terms of service and robots.txt.

This project is intended for educational and research purposes only.

🔮 Future Improvements

Database integration (MongoDB / Supabase)

Daily scheduled scraping

Price history tracking

Email or WhatsApp alerts

Web dashboard visualization

📌 Author

Developed by Adarsh Mishra
(Browser automation & data extraction project)
>>>>>>> 7cada482ff530b9110abccc6408fb93fb70775c5
