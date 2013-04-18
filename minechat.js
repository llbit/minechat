var readline = require('readline');
var mineflayer = require('mineflayer');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

var bot = mineflayer.createBot({
  host: "hostname",
  username: "user@email.com",
  password: "password"
});

rl.on('line', function(line) {
	bot.chat(line);
});

bot.on('chat', function(username, message) {
  console.log(username + ": " + message);
});
