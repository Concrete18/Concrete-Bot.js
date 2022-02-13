// Require the necessary discord.js classes
const { Client, Intents, Message } = require('discord.js');
const dotenv = require('dotenv')
const os = require("os");


// Create a new client instance
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  const guildId = '665031048941404201'
  const guild = client.guilds.cache.get(guildId)
  
  let commands
  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }

  commands?.create({
    name: 'ping',
    description: 'Sends Pong'
  })

});

// Listen for when interactions are created
client.on('interactionCreate', (interaction) => {
  // There are multiple types of interactions
  // Make sure this is a command
  if (!interaction.isCommand()) return;
  
  // Access the name of the command and the given arguments
  const { commandName, options } = interaction

  // Perform the addition if the user is running the "add" command
  if (commandName === 'ping') {
    interaction.reply({
      content: 'Pong!',
      ephemeral: true // Only the user can see this reply
    })
  }
})

// Token setup
let token
dotenv.config()
if (os.type() === 'Windows_NT') token = process.env.devBot;
else token = process.env.prodBot;
// bot startup
client.login(token);
