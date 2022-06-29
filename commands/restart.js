const Discord = require('discord.js');
const config = require('../config.json')

module.exports = {
    run: async (client, message, args) => {            
            console.log('stop!!!')
            message.channel.send("stop!!!")
            message.channel.send("")
    },
    name: '%stop',
    aliases: ['stop'],
    desciption: "stop"
}