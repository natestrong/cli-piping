const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', line => {
    const sum = line
		.split(" ")
		.reduce((sum, i) => sum + Number(i), 0);
    console.log(`Line: ${sum}`);
});
