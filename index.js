const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, GatewayIntentBits:Intents, Colors, Partials, Events } = require('discord.js');
const dotenv = require('dotenv');
const Db = require("nope.db-nl");
const color = require('colors')

dotenv.config();

const client = new Client({
	intents: [
		Intents.Guilds, Intents.GuildMessages, Intents.MessageContent,
		Intents.Guilds, Intents.DirectMessages, Intents.GuildMembers,
		Intents.GuildPresences, Intents.GuildEmojisAndStickers, Intents.GuildMessageReactions,
		Intents.DirectMessageReactions, Intents.DirectMessageTyping, Intents.GuildMessageTyping,
		Intents.GuildInvites
	]
});

globalThis.c = Colors;
const db = new Db({
    path: "./database.json",
    seperator: ".",
    spaces: 2
});
globalThis.db = db

console.log('-----------------Eventy-----------------------');

const eventsPath = path.join(__dirname, 'eventy');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
		console.log(`✅  Załadowano event`.green, `${file}`.blue)
	} else {
		console.log(`✅  Załadowano event`.green, `${file}`.blue)
		client.on(event.name, (...args) => event.execute(...args));
	}
}
console.log('-----------------Eventy----------------------');
console.log(' ');

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'cmd');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
console.log(`✅  `+`Uruchomiono bota`.rainbow);

process.on('unhandledRejection', (err) => {
    console.log(err)
});

client.login(process.env.DISCORD_BOT_TOKEN);
