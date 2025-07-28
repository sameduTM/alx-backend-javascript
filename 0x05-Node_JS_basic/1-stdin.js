console.log("Welcome to ALX, what is your name?");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  const name = chunk.toString().trim();
  if (name !== null) {
    console.log(`You name is: ${name}`);
  }
  process.exit(0);
});

process.on("exit", () => {
  console.log('This important software is now closing');
})