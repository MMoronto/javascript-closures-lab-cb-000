function bumpCounter() {
  var counter = 0
  
  function addBump() {
    counter++
  }
  
  function getBumps() {
    return incr 
  }
  return {
    addBump,
    getBumps
  }
}
