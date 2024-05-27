const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Gra w paletki!!',
	data: new SlashCommandBuilder(),
	async execute(i)
	{
		const embed = {
			title: '🏓 ping',
			description: `ping: ${i.client.ws.ping}ms`
		}

		i.reply({
			embeds: [
				embed
			]
		});
	}
}
