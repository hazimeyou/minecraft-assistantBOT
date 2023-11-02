const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chunk')
		.setDescription('チャンク数をマス数に変換します')
		.addStringOption(option =>
			option.setName('chunk')
				.setDescription('ここにチャンク数を入力します')),
	async execute(interaction) {
		await interaction.reply({content:`${(interaction)}`});
		},
}