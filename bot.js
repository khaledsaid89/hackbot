const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598834487559979018")
setInterval(function() {
channel.send(`Last bot`);
}, 30)
})

client.login(process.env.BOT_TOKEN);