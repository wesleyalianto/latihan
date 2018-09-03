// console.log('Selamat datang di hoki-hoki bento');
// console.log('1. Lihat Menu \n2. Pesan Menu \n3. Lihat Cart \n4. Bayar');

// var pilihan = readline();

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});