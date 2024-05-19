const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ostrzezenia')
		.setDescription('Pokazuje ile ktoś ma ostrzezen')
    	.addUserOption(option => option.setName('osoba').setDescription('wybierz kogos')),
    async execute(interaction) {
        const embednoperms = {
     title: 'Twoje ostrzezenia',
	fields: [
        {name: 'Aktualnie masz', value: ` ${db.get(`${interaction.user.id}_warny`) || '0'} ostrzeżeń`},
		{name: '24 godziny wyciszenie', value: `3 ostrzeżenia`},
        {name: '7 dni wyciszenia ', value: `5 ostrzeżeń`},
		{name: '28 dni wyciszenia', value: ` 7 ostrzeżeń`},
		{name: 'Ban', value: `10 ostrzeżeń`},   
    ],
     
     color: Colors.Red
 }
if (!interaction.member.roles.cache.has('1207793754979700816'))
if (!interaction.member.roles.cache.has('1208491608190754816')) return interaction.reply({embeds: [embednoperms] })
const us = interaction.options.getUser('osoba')
if (!us) return interaction.reply({embeds: [embednoperms]})
              const embed = {
     title: `Ostrzezenia osoby ${us.username}`,
	fields: [
        {name: 'Aktualnie posiada', value: ` ${db.get(`${us.id}_warny`) || '0'} ostrzeżeń`},
		{name: '24 godziny wyciszenie', value: `3 ostrzeżenia`},
        {name: '7 dni wyciszenia ', value: `5 ostrzeżeń`},
		{name: '28 dni wyciszenia', value: ` 7 ostrzeżeń`},
		{name: 'Ban', value: `10 ostrzeżeń`},   
    ],
     
     color: Colors.Red
 }  
interaction.reply({embeds: [embed]})
    }
}
        