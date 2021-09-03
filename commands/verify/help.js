const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { prefix } = require(`../../config.json`)

module.exports = {
  name: "help",
  aliases: ["info"],

  run: (client, message, args) => {


 let embed = new MessageEmbed()
.setTitle(`Help`)
.setDescription(`**Here are the all commands:**
> \`${prefix}setverify\`: Set verification channel, autodelete channel.
> \`${prefix}setrole\`: Gives role when they use ${prefix}verify command in verification channel.
> \`${prefix}setrrole\`: Removes role when they use ${prefix}verify command in verification channel.
> \`${prefix}verify\`: It gives or remove role it works only in verification channel.
> \`${prefix}rvrole\`: Reset **Give Role** 
> \`${prefix}rvchannel\`: Reset **Verification Channel**
> \`${prefix}rrvrole\`: Reset **Remove Role**`)
.setColor("#87CEEB")
.setTimestamp()
  message.channel.send(embed)

  }
}