const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('mozesz tym sprawdzac ip')
    	.addStringOption(option => option.setName('ip').setDescription('wpisz ip').setRequired(true)),
    async execute(interaction) {
        const wpisaneip = interaction.options.getString('ip')
      const wyslane = await fetch(`http://ip-api.com/json/${wpisaneip}`);
      const zdobyte = await wyslane.json();
      const { query, city, regionName, isp, org, country, status } = zdobyte;
      if (status == 'fail') return interaction.reply('napewno to jest poprawne ip?')
          const embed = {
        title: `Szukanie IP: ${query || 'nieprawidlowe ip'}`,
        fields: [
        { name: 'ISP', value: isp || 'Nieznany ISP'},
        { name: 'org', value: org || 'Nieznany org'},
        { name: 'Miasto', value: city || 'Brak informacji o ip'},
        { name: 'Region', value: regionName || 'Brak informacji o ip'},
        { name: 'Kraj', value: country || 'Brak informacji o ip' },
        ],
        color: c.Blurple
      };
      interaction.reply({embeds: [embed]})
    }
    }