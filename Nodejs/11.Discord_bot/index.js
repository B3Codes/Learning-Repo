// Import required modules from discord.js
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from a .env file

// Retrieve the bot token from environment variables
const TOKEN = process.env.TOKEN;

// Create a new Discord bot client instance with necessary intents
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, // Enables interaction with guild (server) events
    GatewayIntentBits.GuildMessages, // Enables access to messages in guilds
    GatewayIntentBits.MessageContent // Allows the bot to read message content
  ]
});

// Event listener for new messages in a server
client.on("messageCreate", (message) => {
  // Ignore messages from other bots to prevent infinite loops
  if (message.author.bot) return;

  // Reply to the user's message with a predefined response
  message.reply({
    content: 'Hi, we will get back soon!'
  });
});

// Event listener for interactions (e.g., slash commands, button clicks)
client.on("interactionCreate", (interaction) => {
  console.log(interaction); // Log interaction details to the console

  // Respond to the interaction (currently a simple "PONG!!" response)
  interaction.reply("PONG!!");
});

// Log in the bot using the token
client.login(TOKEN);
