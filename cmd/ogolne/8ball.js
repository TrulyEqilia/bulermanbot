const { SlashCommandBuilder, Colors } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('8ball')
		.setDescription('cos')
    	.addStringOption(option => option.setName('tekst').setDescription('wpisz cos').setRequired(true)),
    async execute(interaction) {
        const tekst = interaction.options.getString('tekst')
const crypto = require('crypto')
        let odp = [
            'Tak',
            'Nie',
            'Nie wiem',
            'Może',
            'Wątpie'
        ]
        const { randomInt:losuj } = require('node:crypto')
        const ktore = losuj(0, odp.length)
        interaction.reply(odp[ktore])      
    
    }
}
        