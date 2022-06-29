const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        console.log(`help ${message.member.displayName}`)
        message.delete()
        message.channel.send({embeds: [client.embedManager.embedHelp(message.member)]})
    },

    name: '%help',
    aliases: ['help'],
    description: "Help"
}