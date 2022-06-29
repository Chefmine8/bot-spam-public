const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {

        let raison = args.splice(2).join(' ');
        if (!raison) return console.log("Pas de raison.");
        message.channel.send(`%Le bot spam: ${raison}`);   
    
    },
    name: '%Le',
    aliases: ['partie'],
    desciption: "spam"
}