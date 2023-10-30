
function isPasswordValid(password) {
  if (password===null||password===undefined) return false
  if (password.length<8) return false
  
  let speChar = "@ # $ % ^ & \ * !"
  let digit ="0 1 2 3 4 5 6 7 8 9"
  let a_z = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
  let A_Z =a_z.toUpperCase()
  let speCharBoo=false,digitBoo=false,a_zBoo=false,A_ZBoo=false

  for (let i = 0; i < password.length; i++) {
    if(speChar.includes(password[i])){
      speCharBoo =true
    }if(digit.includes(password[i])){
      digitBoo=true
    }if(a_z.includes(password[i])){
      a_zBoo=true
    }if(A_Z.includes(password[i])){
      A_ZBoo=true
    }
  }
  console.log(a_zBoo)
  console.log(digitBoo)
  console.log(a_zBoo)
  console.log(A_ZBoo)
  if (password.length>=8&&speCharBoo&&digitBoo&&a_zBoo&&A_ZBoo){
    return true
  } 
  return false
}

module.exports = isPasswordValid
