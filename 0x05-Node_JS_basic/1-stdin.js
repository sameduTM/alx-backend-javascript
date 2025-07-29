process.stdout.write('Welcome to Holberton School, what is your name?\n');

function takeInput() {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      const name = chunk.toString().trim();
      process.stdout.write(`Your name is: ${name}\r`);
    }
  });
}

if (process.stdin.isTTY) {
  takeInput();
} else {
  takeInput();
}
