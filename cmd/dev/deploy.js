const { SlashCommandBuilder } = require('discord.js');
const exec = require('child_process').execSync
module.exports = {
	data: new SlashCommandBuilder()
		.setName('deploy')
		.setDescription('reloadowanie komend!'),
        async execute(interaction) {
if (interaction.user.id !== '1202021421677826052') 
if (interaction.user.id !== '1084489833117917254') return;
console.log(exec('node deploy'))
interaction.reply('Wykonano')
}
}