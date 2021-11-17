const alert = require("./index");

alert();

alert({
  type: `success`,
  msg: `Everything finished!`,
  name: `DONE`,
});

alert({
  type: `warning`,
  msg: `You didn't add something!`,
});

alert({
  type: `info`,
  msg: `I am awesome!`,
});

alert({
  type: `error`,
  msg: `Something went wrong`,
});
