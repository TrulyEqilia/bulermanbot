const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('statystyki')
		.setDescription('statystyki i informacje o serwerze'),
    async execute(interaction) {
        interaction.guild.bans.fetch()
      const embed = {
      title: `${interaction.guild.name}`,
      fields: [
      {name: 'Ilość kanałów', value: `${interaction.guild.channels.cache.size} (liczy tez posty forum)`, inline: true},
	  {name: 'Ilość banów', value: `${interaction.guild.bans.cache.size}`, inline: true},
	  {name: 'Ilość osób', value: `${interaction.guild.members.cache.size}`, inline: true},	
      {name: 'Właściciel serwera', value: `<@${interaction.guild.ownerId}>`, inline: true},
      {name: 'Liczba ról', value: `${interaction.guild.roles.cache.size}`, inline: true},
      {name: 'Stworzono serwer', value: `${interaction.guild.createdAt}`, inline: true},
      {name: 'ID serwera', value: `${interaction.guild.id}`, inline: true},
          
      ],
     thumbnail: {
		url: `${interaction.guild.iconURL({ extension: "png"})}`,
	},
    color: Colors.Green
      }
      interaction.reply({embeds: [embed]})
    }
}