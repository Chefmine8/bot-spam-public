const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {    
        message.delete();
        
        let raison = args.join(' ');
        if (!raison) return console.log("Pas de raison.");
        message.channel.send(`%Le bot spam: ${raison}`);
        console.log(`${message.member.displayName} a spam : ${raison}`)
    },
    name: '%spam',
    aliases: ['spam'],
    desciption: "Commande pour spam"
}