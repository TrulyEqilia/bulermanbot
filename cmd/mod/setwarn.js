const { SlashCommandBuilder, PermissionsBitField, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('setwarn')
		.setDescription('ustawia ostrzezenie')
        .addUserOption(option => option.setName('kto').setDescription('komu chcesz zmienic ilosc ostrzezen').setRequired(true))
        .addStringOption(option => option.setName('ile').setDescription('Ile ta osoba ma miec ostrzezen')),
    async execute(interaction) {
         const osoba = interaction.options.getUser('kto');
		const czlon = interaction.guild.members.cache.get(osoba.id)
        const ile = interaction.options.getString('ile')
 if (!interaction.member.roles.cache.some(role => role.id === '1208491608190754816'))
   if (!interaction.member.roles.cache.some(role => role.id === '1207793754979700816')) return interaction.reply('Nie masz permisji');
        if (ile == '1') {
        db.set(`${osoba.id}_warny`, 1)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '2') {
        db.set(`${osoba.id}_warny`, 2)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '3') {
        db.set(`${osoba.id}_warny`, 3)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '4') {
        db.set(`${osoba.id}_warny`, 4)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '5') {
        db.set(`${osoba.id}_warny`, 5)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '6') {
        db.set(`${osoba.id}_warny`, 6)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '7') {
        db.set(`${osoba.id}_ostrzezenia`, 7)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '8') {
        db.set(`${osoba.id}_warny`, 8)
        interaction.reply('Ustawiono')
        return;
        }
                if (ile == '9') {
        db.set(`${osoba.id}_warny`, 9)
        interaction.reply('Ustawiono')
        return;
        }
        interaction.reply('Wpisz ile osoba ma miec ostrzeżeń\nDostępne opcje: `1-9`')
    }
}