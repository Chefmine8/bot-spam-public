const Discord = require('discord.js');
const Bot = require('./bot');
const componentManager = require('./manager/componentManager');
const embedManager = require('./manager/embedManager');
const config = require('./config.json');
new Bot(new embedManager(), new componentManager);