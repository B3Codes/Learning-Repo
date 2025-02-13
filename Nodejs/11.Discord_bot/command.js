// Import necessary modules from discord.js
const { REST, Routes } = require('discord.js');
require('dotenv').config(); // Load environment variables from a .env file

// Retrieve bot credentials from environment variables
const CLIENT_ID = process.env.CLIENT_ID; // Your bot's client (application) ID
const TOKEN = process.env.TOKEN; // Bot token for authentication

// Define the commands that will be registered as slash (/) commands
const commands = [
  {
    name: 'ping', // Name of the command (user types /ping)
    description: 'Replies with Pong!', // Description of what the command does
  },
];

// Create a new REST instance to interact with Discord API
const rest = new REST({ version: '10' }).setToken(TOKEN);

// Immediately Invoked Async Function to register commands
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    // Register the slash commands globally using Discord's REST API
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    // Log any errors that occur during the command registration process
    console.error(error);
  }
})();
