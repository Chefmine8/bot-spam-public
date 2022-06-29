const { MessageEmbed, Message } = require('discord.js');

module.exports = class embedManager {
    embedHelp(member, type_command, user) {
        const embedHelp = new MessageEmbed()
            .setColor('AQUA')
            .setAuthor('Le prefix du bot est: %')
            .setDescription(`- help \n - spam : se que vous voulez spam. \n - stop`)
            .setFooter('Amusé vous bien. \n Tout abus sera sanctionné.')
        
        return embedHelp;
    }
}