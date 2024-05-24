module.exports = {
	name: 'messageCreate',
	async execute(m) {
		if (m.webhookId) return;
		
		if (!globalThis.profile.doesUserHaveAProfile(m.author.id)) {
			globalThis.profile.reinitialiseUserProfile(m.author.id);

			process.stderr.write(`Initialised user ${m.author.displayName} (${m.author.id}) in database\n`);
		}
	}
}
