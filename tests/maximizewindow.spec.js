
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Get screen dimensions (example for a common resolution, adjust as needed)
  const screenWidth = 1920; // Replace with your screen's width
  const screenHeight = 1080; // Replace with your screen's height

  await page.setViewportSize({ width: screenWidth, height: screenHeight });
  await page.goto('https://www.example.com');
  // ... your test actions
  await browser.close();
})();