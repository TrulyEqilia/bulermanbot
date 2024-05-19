const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'pizg',
	data: new SlashCommandBuilder(),
	async execute(i)
	{
		i.reply('ok');
	}
}
