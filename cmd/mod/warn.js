const { SlashCommandBuilder, PermissionsBitField, Colors } = require('discord.js');
const ms = require('ms')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('Daje ostrzezenie')
        .addUserOption(option => option.setName('kto').setDescription('kogo chcesz opierdolic').setRequired(true))
        .addStringOption(option2 => option2.setName('powod').setDescription('jaki powod')),
	async execute(interaction) {
        const osoba = interaction.options.getUser('kto');
        const powod = interaction.options.getString('powod') || 'Nie podano powodu';
		const czlon = interaction.guild.members.cache.get(osoba.id)
 if (!interaction.member.roles.cache.some(role => role.id === '1208491608190754816'))
   if (!interaction.member.roles.cache.some(role => role.id === '1207793754979700816')) return interaction.reply('Nie masz permisji');
        db.add(`${osoba.id}_warny`, 1)
        db.add(`id_kary`, 1)
        const warny = db.get(`${osoba.id}_warny`)
 		const wiad = await interaction.reply(`Ostrzezono ${czlon} to już jego ${warny} ostrzezenie`)
        interaction.guild.channels.cache.get('1240770585013911623').send({embeds: [{
            title: 'Ostrzezenie',
            fields: [
                {name: 'Administrator', value: `${interaction.user.username} (${interaction.user})` },
                {name: 'Ostrzeżenie dotyczy', value: `<@${osoba.id}>` },
                {name: 'Powód', value: ` ${powod}` },
                {name: 'Ilość ostrzeżeń', value: `${warny}` },
                {name: 'ID Kary', value: `${db.get(`id_kary`)}` },                
                
            ],
            color: Colors.Red
        }]});
        czlon.send({embeds: [{
            title: 'Ostrzeżenie',
            fields: [
                {name: 'Administrator', value: `${interaction.member}`},
                {name: 'Powód', value: `${powod || 'Nie podano powodu'}`},
                {name: 'ID', value: `${db.get(`id_kary`)}`, inline: true},
            ],
            color: Colors.Red
        }]})

        if (warny == 3) {  
 if (!czlon.roles.cache.some(role => role.id === '1207793754979700816'))
 if (!czlon.roles.cache.some(role => role.id === '1208491608190754816')) { 
czlon.timeout(ms('24h'), {reason: '3 ostrzezenia'})
return;
}
wiad.edit('Ta osoba ma role moderatorska/administratorska więc sam musisz ją ukarać')
        }
              if (warny == 5) {
if (!czlon.roles.cache.some(role => role.id === '1207793754979700816'))
if (!czlon.roles.cache.some(role => role.id === '1208491608190754816')) { 
czlon.timeout(ms('7d'), {reason: '5 ostrzezen'})

return;
}
wiad.edit('Ta osoba ma role moderatorska/administratorska więc sam musisz ją ukarać')
              }
                if (warny == 7) {
 if (!czlon.roles.cache.some(role => role.id === '1207793754979700816'))                    
if (!czlon.roles.cache.some(role => role.id === '1208491608190754816')) { 
czlon.timeout(ms('28d'), {reason: '7 ostrzezen'})
return;
}
wiad.edit('Ta osoba ma role moderatorska/administratorska więc sam musisz ją ukarać')
}
                      if (warny == 10) {
 if (!czlon.roles.cache.some(role => role.id === '1207793754979700816'))                          
if (!czlon.roles.cache.some(role => role.id === '1208491608190754816')) { 
interaction.reply(`Ostrzezono ${czlon} to już jego ${warny} ostrzezenie `)
czlon.ban({reason: `10 ostrzezen Ostatnie nadał ${interaction.user.username}`})
db.set(`${osoba.id}_warny`, 0)
return;
}
wiad.edit('Ta osoba ma role moderatorska/administratorska więc sam musisz ją ukarać')
db.set(`${osoba.id}_warny`, 0)
                      }
	},
};