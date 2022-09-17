// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tmi from "tmi.js";

export default async function handler(req, res) {
  const { token } = req.query;
  const client = new tmi.Client({
    options: { debug: true },
    connection: {
      reconnect: true,
      secure: true,
    },
    identity: {
      username: "tumatador666",
      password: "oauth:"+token,
    },
    channels: ["forsen"],
  });

  client.connect();
  client.on("message", (channel, tags, message, self) => {
    console.log(channel, self);
    // Ignore echoed messages.
    if (message.toLowerCase() === "!hello") {
      // "@alca, heya!"
    }
  });

  for (let i = 0; i < 1000; i++) {
    (async () => {
      setTimeout(async () => {
        let left = i % 2 === 0 ? String.fromCharCode([0x2800]) : "";
        let right = i % 2 !== 0 ? String.fromCharCode([0x2800]) : "";
        await client.say("forsen", `${left} 7tvM ${right}`);
      }, i * 1000);
    })();
  }

  res.status(200).json({ name: "John Doe" });
}
