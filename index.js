const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
  console.log(`🤖 Bot logado como ${client.user.tag}`);
});

client.on("messageCreate", msg => {
  if (msg.content === "!ping") {
    msg.reply("🏓 Pong!");
  }
});

client.login(process.env.TOKEN); // TOKEN vai ser configurado no ambiente
