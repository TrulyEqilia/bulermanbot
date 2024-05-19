const path = require('node:path');
const fs = require('node:fs');

globalThis.client.commands = new Map();

globalThis.reloadCommands()
{
	let i = 0;

	const cmdDir = fs.readdirSync(globalThis.config.directories.commandDir);
	const cmdFiles = cmdDir.filter((fileName) => fileName.endsWith('.js'));

	for (;i < cmdFiles.length; i++) {
		const cmdModuleFileName = cmdFiles[i];

		const cmdModulePath = path.join(process.cwd(), cmdModuleFileName);

		delete require.cache[require.resolve(cmdModulePath)];
		const cmdModule = require(cmdModulePath);

		if (typeof cmdModule?.name !== 'string') {
			throw new TypeError(`cmdModule.name expected to have type of string, not type of ${typeof cmdModule.name}!!`);
		}

		if (typeof cmdModule.execute !== 'function') {
			throw new TypeError(`cmdModule.execute expected to have type of function, not type of ${typeof cmdModule.execute}!!`);
		}

		globalThis.client.commands.set(cmdModule.name, cmdModule);
	}
}

module.exports = {
	name: 'interactionCreate',
	async execute(interaction)
	{
		/* noop */
	}
}
