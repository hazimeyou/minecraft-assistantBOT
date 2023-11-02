const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
	console.log(`${client.user.tag}でログインしました。`);
});

client.login(token);

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`${filePath} に必要な "data" か "execute" がありません。`);
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`${interaction.commandName} が見つかりません。`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'エラーが発生しました。', ephemeral: true });
	}
});

//下は計算部分

var chunk = "/chunk chunk";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(chunk)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split(":"); // メッセージコンテンツを スペース で配列にする
	if (args[0] === chunk) { // prefix + "name" と送信された場合
		const chunk = args[1];
		message.channel.send({ content: `${(chunk*16)}` });
	}
});

var block = "/block block";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(block)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split(":"); // メッセージコンテンツを スペース で配列にする
	if (args[0] === block) { // prefix + "name" と送信された場合
		const block = args[1];
		message.channel.send({ content: `${(block/16)}` });
	}
});

var item = "/item 1";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(item)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split("a:"); // メッセージコンテンツを スペース で配列にする
	if (args[0] === item) { // prefix + "name" と送信された場合
		const item = args[1];
		const item2 = args[2];
		message.channel.send({ content: `${(item * item2)}` });
		//message.channel.send({ content: `${(item * 64)}` });
	}
});

var chest = "/chest 1";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(chest)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split("a:"); // メッセージコンテンツを スペース で配列にする
	if (args[0] === chest) { // prefix + "name" と送信された場合
		const chest = args[1];
		const chest2 = args[2];
		message.channel.send({ content: `${(chest * chest2)}` });
		//message.channel.send({ content: `${(chest * 54)}` });

	}
});

var update = "バージョン0.1ベータ版";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(update)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split("："); // メッセージコンテンツを スペース で配列にする
	if (args[0] === update) { // prefix + "name" と送信された場合
		const update = args[1];
		message.channel.send('バージョン0.2ベータ版：updateコマンド・item・chestコマンド実装・helpコマンドをのぞく全コマンドの説明日本語化・helpコマンドのバージョン変更');
	}
});

var help = "バージョン0.2ベータ版です";

client.on(Events.MessageCreate, message => {
	if (!message.content.startsWith(help)) return; // prefix の文字列から始まるもの以外には反応しないようにする
	const args = message.content.split("。"); // メッセージコンテンツを スペース で配列にする
	if (args[0] === help) { // prefix + "name" と送信された場合
		const help = args[1];
		message.channel.send('やってはいけないことスラッシュコマンドの入力欄が2個ある場合1aが最初次にaに入力してください');
		message.channel.send('またどちらも入力してください。入力されてないとNaNと表示されます');
                message.channel.send('制作：はじめよう　配布：https://github.com/hazimeyou/minecraft-assistantBOT');
	}
});
