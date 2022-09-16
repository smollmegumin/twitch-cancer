// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tmi from "tmi.js";

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: "tumatador666",
    password: "oauth:72zzrqtavoqnpmlhr33wf1tozgn4cy",
  },
  channels: ["forsen"],
});

client.connect();
export default async function handler(req, res) {
  client.on("message", (channel, tags, message, self) => {
    console.log(channel, self);
    // Ignore echoed messages.
    if (message.toLowerCase() === "!hello") {
      // "@alca, heya!"
    }
  });

  for (let i = 0; i < 30; i++) {
    (async () => {
      setTimeout(async () => {
        await client.say(
          "forsen",
          `, veryFors ${String.fromCharCode([
            0x2800,
          ]).repeat(i)}`
        );
      }, i * 1000);
    })();
  }

  res.status(200).json({ name: "John Doe" });
}
