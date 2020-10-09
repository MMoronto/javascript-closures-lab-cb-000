function bumpCounter() {
  var counter = i
  
  function addBump() {
    incr = counter + 1
  }
  
  function getBumps() {
    return incr 
  }
  return {
    addBump,
    getBumps
  }
}
