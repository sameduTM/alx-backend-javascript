process.stdout.write('Welcome to ALX, what is your name?\n');

function takeInput () {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      const name = chunk.toString().trim();
      console.log(`Your name is: ${name}`);
    }
  });
}

if (process.stdin.isTTY) {
  takeInput();
} else {
  takeInput();
  setTimeout(() => {
    process.stdout.write('This important software is now closing\n');
  });
}
