function bumpCounter() {
  var counter = 0
  
  function addBump() {
    counter++
  }
  
  function getBumps() {
    return counter 
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function innerFunction(deadlyDevice) {
    return { animalType, deadlyDevice}
  }
}

var sharkCreator = createAnimal('shark')
var sharkWithFreakingLaserbeam = sharkCreator('Laserbeam')


