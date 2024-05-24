const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'pizg',
	data: new SlashCommandBuilder(),
	async execute(i)
	{
		const embed = {
			title: '🏓 ping',
			description: `ping: ${i.client.ws.ping}`
		}

		i.reply({
			embeds: [
				embed
			]
		});
	}
}
