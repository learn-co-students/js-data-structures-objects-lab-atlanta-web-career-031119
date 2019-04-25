const driver = {name: 'Jim', address: '12 main st', age: '55'};

function updateDriverWithKeyAndValue(driver, key, value) {
  // const newDriver = { ...driver };
  // newDriver.name = 'tyler'
  // return newDriver
  const newDriver = Object.assign({}, driver, { [key]: value})

  return newDriver

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver.name

  return newDriver

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}
