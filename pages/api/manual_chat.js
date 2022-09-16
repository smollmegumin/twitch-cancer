import puppeteer from "puppeteer";

export default function handler(req, res) {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.twitch.tv/forsen");
    await page.screenshot({ path: "example.png" });

    await browser.close();
  })();

  res.status(200).json({ name: "sent message" });
}
