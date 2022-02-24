const driver = new OnlineSimDriver('ba4948c08e3d1494b4d11c437a29c663');
const getter = driver.numbers()

getter.stateOne(res.tzid).then((result) => {
    console.log(result);
  })
  
  // next message
  getter.next(res.tzid).then((result) => {
    console.log(result);
  })
  ...
  getter.state().then((result) => {
    console.log(result);
  })
  ...
  getter.close(res.tzid).then((result) => {
    console.log(result);
  })