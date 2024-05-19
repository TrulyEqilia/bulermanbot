const { SlashCommandBuilder, PermissionsBitField, Colors } = require('discord.js');
const ms = require('ms')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('resetwarn')
		.setDescription('Czysci ostrzezenie')
        .addUserOption(option => option.setName('kto').setDescription('komu chcesz usunac ostrzezenia').setRequired(true)),
    async execute(interaction) {
         const osoba = interaction.options.getUser('kto');
		const czlon = interaction.guild.members.cache.get(osoba.id)
 if (!interaction.member.roles.cache.some(role => role.id === '1208491608190754816'))
   if (!interaction.member.roles.cache.some(role => role.id === '1207793754979700816')) return interaction.reply('Nie masz permisji');
        db.remove(`${osoba.id}_warny`)
        interaction.reply(`Wyczyszczono ostrzeżenia użytkownika ${osoba}`)
                interaction.guild.channels.cache.get('1240770585013911623').send({embeds: [{
            title: 'Wyczyszczenie ostrzeżeń',
			fields: [
                {name: 'Administrator', value: `${interaction.user.username} (${interaction.user})`},
				{name: 'Dotyczy', value: `<@${osoba.id}>`}
            ],
			color: Colors.Gold
        }]});
    }
}