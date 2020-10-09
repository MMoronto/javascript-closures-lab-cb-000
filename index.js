function bumpCounter() {
  var counter = 0
  
  function addBump() {
    incr = counter++
  }
  
  function getBumps() {
    return incr 
  }
  return {
    addBump,
    getBumps
  }
}
