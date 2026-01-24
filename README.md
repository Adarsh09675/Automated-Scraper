🍎 Flipkart Apple Product Scraper (₹30,000 Range)

An automated browser-based web scraping system built using Node.js and Playwright that extracts Apple products from Flipkart priced around ₹30,000.
The scraper handles dynamic content, lazy loading, popups, and pagination, then cleans and exports structured product data into a CSV file for monitoring and analysis.

🎯 Project Objective

To automate the process of browsing Flipkart and identifying Apple products near ₹30,000, eliminating the need for manual searching and enabling structured data collection for analysis and tracking.

✨ Features

Automated Flipkart browsing using a real browser

Handles JavaScript-rendered and lazy-loaded content

Automatically closes login popups

Supports pagination across multiple result pages

Extracts product name, price, link, and image

Filters products within the ₹27,000–₹33,000 range

Sorts and ranks results

Exports data to CSV format

🛠️ Tech Stack

Node.js – runtime environment

Playwright – browser automation

csv-writer – CSV generation

fs (File System) – file handling

⚙️ How It Works

Launches an automated Chromium browser

Opens Flipkart Apple product search page

Closes login popup if it appears

Scrolls pages to load all products

Extracts raw product information

Cleans and parses product data

Filters Apple products near ₹30,000

Handles pagination automatically

Sorts and ranks products

Saves structured data to a CSV file

📂 Project Structure
flipkart-apple-scraper/
│
├── src/
│   └── scrape.js
├── data/
│   └── apple_products_near_30000.csv
├── package.json
└── README.md

▶️ Installation & Usage
Prerequisites

Make sure Node.js is installed:

node -v
npm -v

Step 1: Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Step 2: Install dependencies
npm install

Step 3: Install Playwright browsers
npx playwright install

Step 4: Run the scraper
node src/scrape.js


The browser will open automatically and start scraping.

📁 Output

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
