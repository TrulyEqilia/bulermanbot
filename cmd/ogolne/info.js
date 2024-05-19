const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('informacjeosoba')
		.setDescription('Informacje o osobach ')
        .addUserOption(opcja => opcja.setName('osoba').setDescription('Informacja o kims').setRequired(true)),
    async execute(interaction) {
        const osoba = interaction.options.getUser('osoba')
        const czlon = interaction.guild.members.cache.get(osoba.id)
 interaction.reply({embeds: [{
     title: 'Osoba',
     description: `**Nazwa**: ${osoba.username}\n**Twoja nazwa wyświetlana**: ${osoba.globalName || 'Brak nazwy wyświetlanej'}\n**ID**: ${osoba.id}\n**Najwyższa rola**: ${czlon.roles.highest}\n**Nazwa najwyzszej roli**: ${czlon.roles.highest.name}\n**Uprawnienia**: \`\`\`${czlon.permissions.toArray().join(', ')}\`\`\`\n**Kolor**: ${interaction.member.displayHexColor}\n**Pozycja najwyższej roli**: ${czlon.roles.highest.position} `,
     color: Colors.Aqua
 }]})       
    }
}
        