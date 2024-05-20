const util = require('node:util');

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: 'eval',
	description: 'ewaluator',
	data: new SlashCommandBuilder().
		addStringOption((opt) => opt.setName('kod').setDescription('kod').setRequired(true)),
	async execute(i)
	{
		if (i.user.id !== '1125528136524775444')
		if (i.user.id !== '1084489833117917254')
		if (i.user.id !== '1202021421677826052')
			return await i.reply('OwO');

		const input = i.options.get('kod').value;
		let output;

		try {
			output = await util.inspect(eval(input));
		} catch (e) {
			output = `${e}`;
		}

		return i.reply(output);
	}
}
