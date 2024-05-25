const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'roulette',
	description: 'ruletka',
	data: new SlashCommandBuilder(),
	async execute(i)
	{
		if (Math.floor(Math.random() * 100) >= 50) {
			return i.reply('przegrałeś');
		} else {
			return i.reply('wygrałeś');
		}
	}
}
