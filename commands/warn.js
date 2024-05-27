const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'warn',
	description: 'warn',
	data: new SlashCommandBuilder().
		addUserOption((opt) => opt.setName('poszkodowany').setDescription('użytkownik').setRequired(true)).
		addStringOption((opt) => opt.setName('powod').setDescription('powód').setRequired(true)),
	async execute(i)
	{
		if (!i.member.roles.cache.some((role) => role.id === '1207793754979700816'))
		if (!i.member.roles.cache.some((role) => role.id === '1242114946494500865'))
		if (!i.member.roles.cache.some((role) => role.id === '1242123921785098292')) {
			return i.reply('Brak permisji.');
		};
		const victim = i.options.get('poszkodowany');
		const reason = i.options.get('powod').value;

		if (!globalThis.profile.doesUserHaveAProfile(victim.value)) {
			globalThis.profile.reinitialiseUserProfile(victim.value);
		};

		const warns = globalThis.moderative.warnUser(victim.value);

		console.error(victim);

		return i.reply(`Ostrzeżono <@${victim.value}>. To już jego ${globalThis.odmianyCyfr[warns]} ostrzeżenie.`);
	}
}
