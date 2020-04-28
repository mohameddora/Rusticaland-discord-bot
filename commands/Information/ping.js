const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Returns ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Ping?");
        const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            //.setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
            .setColor(message.member.displayColor)
            .addField("• Ping Latency", `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField("• API Latency", `${Math.round(client.ws.ping)}ms`, true)
            .setFooter(`${client.user.username} | TheSkele27`);
        msg.edit("Pong!", embed);

  }
}
