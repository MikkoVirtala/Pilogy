module.exports.convertArraysToStringInArray = array => {
  let stringArray = []
  for (let i = 0; i < array.length; i++) {
    stringArray.push(array[i].toString())
  }
  return stringArray
}
