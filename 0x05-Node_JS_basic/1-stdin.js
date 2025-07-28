process.stdout.write('Welcome to ALX, what is your name?\n');

if (!process.stdin.isTTY) {
  // Non-interactive mode (piped input)
  let data = '';
  process.stdin.on('data', (chunk) => {
    data += chunk;
  });

  process.stdin.on('end', () => {
    const name = data.toString().trim();
    console.log(`You name is: ${name}`);
    console.log('This important software is now closing');
  });
} else {
  // Interactive mode
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      const name = chunk.toString().trim();
      console.log(`You name is: ${name}`);
      process.exit(0);
    }
  });
}
