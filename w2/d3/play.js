const { connect } = require('./client');
console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    process.stdout.write(handleUserInput(key));
  });
  return stdin;
};


const handleUserInput = key => {
  const stdout = process.stdout;
  //stdout.write(".");
  if (key === "\u0003") {
    process.exit();
  }

  return key;
};

setupInput();
handleUserInput();
