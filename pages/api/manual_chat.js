import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const authToken = "s7dckj4u6xcf6ur3uswyeumxejmwwz";
  const browser = await puppeteer.launch();

  const cookies = [
    {
      name: "auth-token",
      value: authToken,
    },
  ];

  const page = await browser.newPage();
  await page.goto("https://twitch.tv");
  await page.waitForSelector('[data-a-target*="login-button"]');
  const button = await page.$('[data-a-target*="login-button"]');
  await button.click();
  await page.evaluate(() => {
    localStorage.setItem("mature", "true");
    localStorage.setItem("video-muted", '{"default":false}');
    localStorage.setItem("volume", "0.5");
    localStorage.setItem("video-quality", '{"default":"160p30"}');
  });

  await page.setViewport({ width: 1280, height: 720 });
  await page.setCookie(...cookies);

  await page.screenshot({ path: "example.png" });

  res.status(200).json({ name: "sent message" });
}
