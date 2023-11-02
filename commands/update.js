const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('update'),
	async execute(interaction) {
		await interaction.reply('バージョン0.1ベータ版：公開・helpコマンド実装');
	//	await interaction.reply('バージョン0.2ベータ版：updateコマンド・item・chestコマンド実装・helpコマンドをのぞく全コマンドの説明日本語化・helpコマンドのバージョン変更');
	//	await interaction.reply('なにかあれば気軽に質問してください');
	},
};
