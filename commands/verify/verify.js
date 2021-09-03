const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "accept",
  aliases: ["verify"],
  category: ":frame_photo: WELCOME",
  usage: "st <link>",
  description: "Set the img for welcome channel",
  run: (client, message, args) => {

    let rRole = db.get(`verole_${message.guild.id}`)
    let rerole = db.get(`srrole_${message.guild.id}`)

    const chx = db.get(`verify_${message.guild.id}`);
const chan = client.channels.cache.get(chx);
if (message.channel.name == chan.name) {
        

    let myRole = message.guild.roles.cache.get(rRole);
    let reerole = message.guild.roles.cache.get(rerole);

let user = message.member;


user.roles.add(myRole);
user.roles.remove(reerole);


    message.author.send(`You have been verified in ${message.guild.name}`)
     }
    
  }
  }