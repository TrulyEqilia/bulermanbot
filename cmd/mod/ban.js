const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('banuje')
        .addUserOption(option => option.setName('kto').setDescription('kogo chcesz zbanowac').setRequired(true))
        .addStringOption(option2 => option2.setName('powod').setDescription('jaki powod')),
	async execute(interaction) {
        const osoba = interaction.options.getUser('kto');
        const powod = interaction.options.getString('powod') || 'Nie podano powodu';
		const czlon = interaction.guild.members.cache.get(osoba.id)
        if (!interaction.member.permissions.has([PermissionsBitField.Flags.BanMembers])) return interaction.reply('Nie masz uprawnień')
        if (!czlon.bannable) return interaction.reply('nie moge tej osoby zbanować')
        await interaction.guild.bans.create(osoba.id, {reason: `Zbanowany przez: ${interaction.user.username} za: ${powod}`})
		await interaction.reply(`Zbanowano ${czlon} `)

	},
};