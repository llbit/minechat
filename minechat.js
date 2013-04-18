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

var bot = mineflayer.createBot({
  host: process.argv[2],
  username: process.argv[3],
  password: process.argv[4]
});

rl.on('line', function(line) {
	bot.chat(line);
});

bot.on('chat', function(username, message) {
  console.log(username + ": " + message);
});
