function digitalRoot(n) {
  let sum = 0

  function loop(x) {
    let numArr = ('' + x).split('')
    sum = numArr.reduce((total, curr) => total + Number(curr), 0)
    if (sum > 9) {
      loop(sum)
    }
  }
  
  loop(n)
  return sum
}

console.log(digitalRoot(954))
