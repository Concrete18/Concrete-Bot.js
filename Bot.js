// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config({path:'.env'})
let os = require("os");

// Token setup
let token
if (os.type() === 'Windows_NT') token = process.env.devBot;
else token = process.env.prodBot;


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// Login to Discord with your client's token
client.login(token);
