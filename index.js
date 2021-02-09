const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let lookup = arr.find( year => year.result === 'W' )
  return !!lookup ? lookup.year : undefined
}