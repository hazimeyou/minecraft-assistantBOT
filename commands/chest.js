const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chest')
        .setDescription('チェスト系に入ってるスタック数を計算します')
        .addStringOption(option =>
            option
                .setName("1a") //スタック数
                .setDescription('チェスト系の数'))//UTF-8でやる
                .addStringOption(option =>
                    option
                        .setName("a") //スタック数
                        .setDescription('チェストの種類5.9.27.54で選択してください')),
    async execute(interaction) {
        await interaction.reply({ content: `${(interaction)}` });
    },
}
