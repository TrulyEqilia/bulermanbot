const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'slowmode',
	description: 'Limit prędkości!!',
	data: new SlashCommandBuilder().
		addIntegerOption((opt) => opt.setName('limit').setDescription('limit').setRequired(true)),
	async execute(i)
	{
		if (!i.member.roles.cache.some((role) => role.id === '1207793754979700816'))
		if (!i.member.roles.cache.some((role) => role.id === '1242114946494500865'))
		if (!i.member.roles.cache.some((role) => role.id === '1242123921785098292')) {
			return i.reply('Brak permisji.');
		};

		const ratelimit = i.options.get('limit');

		await i.channel.setRateLimitPerUser(ratelimit.value);

		return i.reply('OK\n');
	}
}
