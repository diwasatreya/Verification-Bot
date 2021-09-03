const { prefix, developerID } = require("./config.json")
const { config } = require("dotenv");
const db =require("quick.db");
const welc = require("image-cord")
const Discord = require('discord.js')
const express = require('express')
const { Client, MessageEmbed }  = require('discord.js');
const client = new Discord.Client({
  disableEveryone: false
});
let cooldown = new Set();
let cdseconds = 1; // cooldown time

// This code is made by Supreme#2401


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
process.on('UnhandledRejection', console.error);
 

client.on("message", async message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if(cooldown.has(message.author.id)){

    return message.channel.send(`**${message.author.username}** wait \`10\` seconds to use this command!`)
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
cooldown.delete(message.author.id)}, cdseconds * 1000)

  if (!message.member)
    message.member = message.guild.fetchMember(message);


  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);  

});


client.on("message", async message => {

const channel = db.get(`verify_${message.guild.id}`);

if (channel === null) {
    return;
  }

const chan = client.channels.cache.get(channel);
if (message.channel.name == chan.name) {
  message.delete();

}

        
});





// Do not change anything here
require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: Supreme#2401                   |
 |-----------------------------------------|
 |• Server: https://discord.gg/gU7XAxTpX5  |
 |-----------------------------------------|
 |• Github: https://github.com/diwasatreya |
 |-----------------------------------------|
 |• License: Apache License 2.0            |
 |-----------------------------------------|
`)).listen(3000) //Dont remove this 

client.on("ready", () => {
   client.user.setStatus("dnd"); // You can change it to online, dnd, idle

 console.log(`Successfully logined as ${client.user.tag} `)
});

//  For Watching Status
// client.on("ready", () => {
// client.user.setActivity(`Chilling with owner`, { type:         "STREAMING",
// url: "https://www.twitch.tv/nocopyrightsounds"})});

client.login(process.env.TOKEN);
