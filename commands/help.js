const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('help'),
	async execute(interaction) {
		await interaction.reply('バージョン0.2ベータ版です。サポートはボットの詳細に書いてあります。なにかあれば気軽に質問してください。');
	//	await interaction.reply('サポートはボットの詳細に書いてあります');
	//	await interaction.reply('なにかあれば気軽に質問してください');
	},
};
