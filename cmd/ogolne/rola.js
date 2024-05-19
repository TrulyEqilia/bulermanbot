const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('informacjerola')
		.setDescription('Informacje o rolach ')
        .addRoleOption(opcja => opcja.setName('rola').setDescription('Informacja o roli').setRequired(true)),
    async execute(interaction) {
        const rola = interaction.options.getRole('rola')
 interaction.reply({embeds: [{
     title: 'Rola',
	fields: [
		{
			name: 'Nazwa roli',
			value: `${rola.name}`,
		},
		{
			name: 'ID roli',
			value: `${rola.id}`
		},
        {
			name: `Oznaczenie roli`,
			value: `${rola}`,
		},        
        {
			name: `Pozycja roli`,
			value: `${rola.position}`,
		},
       	{
			name: 'Uprawnienia roli',
			value: `  ${rola.permissions.toArray().join(', ')} `,
		},
     	{
			name: 'Kolor roli',
			value: `  ${rola.hexColor} `,
		},
	],
     color: Colors.Aqua
 }]})       
    }
}
        