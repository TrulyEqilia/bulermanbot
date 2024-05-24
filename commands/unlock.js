const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'unlock',
	description: 'Odblokowanie kanału',
	data: new SlashCommandBuilder(),
	async execute(i)
	{
		if (!i.member.roles.cache.some((role) => role.id === '1207793754979700816'))
		if (!i.member.roles.cache.some((role) => role.id === '1242114946494500865'))
		if (!i.member.roles.cache.some((role) => role.id === '1242123921785098292')) {
			return i.reply('Brak permisji.');
		};

		await i.channel.permissionOverwrites.create(i.channel.guild.roles.everyone, { SendMessages: null });

		return await i.reply({
			content: 'Kanał odblokowany!'
		});
	}
}
