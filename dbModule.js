const bdb = require('burgerdatabase');

globalThis.db = new bdb({
	path: './datastore.json',
	noGzip: true
});

globalThis.profile = {
	reinitialiseUserProfile(id)
	{
		globalThis.db.set(`uprf_${id}`, {warnings:0});
	},
	doesUserHaveAProfile(id)
	{
		if (globalThis.db.get(`uprf_${id}`) === undefined) return false;
		return true;
	},
	getUserProfile(id)
	{
		this.probeForProfileAndIfDoesntExistCreateIt();

		return globalThis.db.get(`uprf_${id}`);
	},
	probeForProfileAndIfDoesntExistCreateIt(id)
	{
		if (!globalThis.profile.doesUserHaveAProfile(id)) {
			globalThis.profile.reinitialiseUserProfile(id);
		};
	}
}

globalThis.moderative = {
	warnUser(id)
	{
		//
		const profile = globalThis.db.get(`uprf_${victim.value}`);

		profile.warnings++;

		globalThis.db.set(`uprf_${victim.value}`, profile);
	}
}

module.exports = {
	db: globalThis.db,
	profile: globalThis.profile,
	moderative: globalThis.moderative
}
