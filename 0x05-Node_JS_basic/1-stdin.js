console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    const INPUT = process.stdin.read();
    process.stdout.write(`Your name is: ${INPUT}`);
  });
} else {
  process.stdin.on('readable', () => {
    const INPUT = process.stdin.read();
    process.stdout.write(`Your name is: ${INPUT}`);
    process.stdin.emit('end');
  });
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });
}
