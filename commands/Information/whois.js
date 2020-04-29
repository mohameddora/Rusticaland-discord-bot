const Discord = require('discord.js')
const { getMember } = require("../../functions.js");
//var fullUsername = string(message.author.username) + string(message.author.discriminator);

const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};

module.exports = {
    name: "whois",
    aliases: ["who", "user", "info"],
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: async (client, message, args) => {
      const msg = await message.channel.send("Loading...");
      const member = getMember(message, args.join(" "));
      let botuser = message.mentions.users.first() ? message.guild.members.cache.get(message.mentions.users.first().id) : message.member
      //const roles = member.roles
            //.filter(r => r.id !== message.guild.id)
            //.map(r => r).join(", ") || 'none';

    //let skele = message.mentions.users.first() ? message.guild.members.cache.get(message.mentions.users.first().id).roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1) : message.member.roles.cache.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1)
//let rolesList = "";
//for(let i = 0; i < skele.length; i++) {
    //rolesList += "<@&" + skele[i] + ">";
    //if(skele.length != (i+1))
      //rolesList += ", ";
//}
 

    const embed = new Discord.MessageEmbed()
    .setAuthor(botuser.displayName, botuser.user.avatarURL())
    .setColor(botuser.displayColor)
    .setThumbnail(botuser.user.avatarURL())
    .addField("User", message.author.username + '#' + message.author.discriminator, true)
    .addField("User", `${message.mentions.users.first()}`, true)
    .addField("ID", botuser.id, true)
    .addField("Status", `${status[botuser.user.presence.status]}`, true)
    .addField("Playing", `${botuser.user.presence.game ? `${botuser.user.presence.game.name}` : "Not playing anything."}`, true)
    .addField("Joined Server At", `${botuser.joinedAt.toLocaleString('en-US')}`, true)
    .addField("Account Created At", `${botuser.user.createdAt.toLocaleString('en-US')}`, true)
    //.addField("Roles", `${roles}`, true)
    //.addField("Roles", `${rolesList}` + ' ,' + ' @everyone', true)
    .setFooter("Rusticaland Bot")
    msg.edit(' ', embed)
  }
}