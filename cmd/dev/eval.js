const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eval')
		.setDescription('wykonywanie kodu js!')
        .addStringOption(option => option.setName('kod').setDescription('wprowadz kod').setRequired(true)),
	async execute(interaction) {
if (interaction.user.id !== '1202021421677826052') 
if (interaction.user.id !== '1084489833117917254') return;
        const i = interaction.options.getString('kod')
const evall = require('util').inspect(eval(i))
try {
    interaction.reply({content: `${evall}`, ephemeral: true})
    console.log(`${interaction.user.username} uzył kodu ${i}`)
} catch(error) {
  interaction.reply({content: error, ephemeral: true})
}
    },
};