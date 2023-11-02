const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('block')
		.setDescription('ブロック数をチャンク数に変換します')
		.addStringOption(option =>
			option.setName('block')
				.setDescription('ここにブロック数を入力します')),
	async execute(interaction) {
		await interaction.reply({ content: `${(interaction)}` });
	},
}