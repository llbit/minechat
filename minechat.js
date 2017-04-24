var readline = require('readline');
var mineflayer = require('mineflayer');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

function print_help() {
	console.log("usage: node minechat.js <hostname> <user> <password>");
}

if (process.argv.length < 5) {
	console.log("Too few arguments!");
	print_help();
	process.exit(1);
}

process.argv.forEach(function(val, index, array) {
	if (val == "-h") {
		print_help();
		process.exit(0);
	}
});

var host = process.argv[2];
var port = 25565;
var user = process.argv[3];
var passwd = process.argv[4];

if (host.indexOf(':') != -1) {
	port = host.substring(host.indexOf(':')+1);
	host = host.substring(0, host.indexOf(':'));
}

console.log("connecting to " + host + ":" + port);
console.log("user: " + user);

var bot = mineflayer.createBot({
	host: host,
	port: port,
	username: user,
	password: passwd
});

rl.on('line', function(line) {
	bot.chat(line);
});

bot.on('chat', function(username, message) {
	console.log(username + ": " + message);
});
