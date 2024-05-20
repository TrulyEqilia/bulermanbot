module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		console.error(member);
		if (member.guild.id !== '1206262266953998336') return;
		const chat = member.client.channels.cache.get('1241870376934441173');

		chat.send(`✨ ${member.user.username} (${member.user.globalName}, <@${member.user.id}>) ✨ dołączył`);
	}
}
