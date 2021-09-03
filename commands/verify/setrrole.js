const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrrole",
  aliases: ["srr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command.");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`Give a role you want to remove when they verified.`)
    }
    

   // This code is made by Supreme#2401
    db.set(`srrole_${message.guild.id}`, vrole.id)
    
    
    message.channel.send(`Now I will remove \`${vrole}\` if they verify `)
  }
}