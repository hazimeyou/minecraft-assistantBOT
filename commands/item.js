const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('item')
        .setDescription('アイテムのスタック数を1つずつにわけます')
        .addStringOption(option =>
            option
                .setName("1a") //スタック数
                .setDescription('スタック数'))//UTF-8でやる
                .addStringOption(option =>
                    option
                        .setName("a") //スタック数
                        .setDescription('スタックの種類1.16.64で選択してください')),
    async execute(interaction) {
        await interaction.reply({ content: `${(interaction)}` });
    },
}
