function fizzBuzz(max) {
  let sum =""
  for (let i = 1; i < max+1; i++) {
    if(i%3===0&&i%5===0){
        sum =sum+'FizzBuzz'
      }else if(i%3===0){
        sum =sum+'Fizz'
      }else if(i%5===0) {
        sum =sum+'Buzz'
      }else sum = sum+i

    // let rds = i
    // if(i%3===0){
    //   rds='Fizz'
    // }if(i%5===0){
    //   rds='Buzz'
    // }if(rds%15===0){
    //   rds="FizzBuzz"
    // } sum=sum+rds
    
    
  }
  return sum
}
console.log(fizzBuzz(15))
module.exports = fizzBuzz
