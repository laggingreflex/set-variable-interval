const lib = require('.');

const clear = lib(() => {
  console.log(new Date());
}, (i = 200) => i + 200);
