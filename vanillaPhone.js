//import OnlineSimDriver from "onlinesim-js-api";
const OnlineSimDriver = require('onlinesim-js-api');

const driver = new OnlineSimDriver('ba4948c08e3d1494b4d11c437a29c663');
const getter = driver.numbers()

getter.tariffs().then((result) => {
  console.log(result);
})
getter.get('3223').then((result) => {
  console.log(result);
})

getter.state().then((result) => {
  console.log(result);
})
