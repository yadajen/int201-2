// Problem 1: Email Validation ,Password Strength //{email : tttttt@sanok.com , password : ElgerpF}

// Write a function emailAndPasswordValidation(data) that checks if the given object email address is valid.
// The email should contain an "@" symbol and have at least one "." after the "@" symbol.
// If email is not valid return undefinded, Checks the strength of a password.It should return:

// · "Weak" if the password is less than 8 characters.

// · "Moderate" if it is at least 8 characters but does not contain at least one uppercase letter, one lowercase letter, and one digit.

// · "Strong" if it meets all the above criteria and contains at least one special character.  @, #, $, %, ^, &, *, !

function emailAndPasswordValidation(data) {
  const email = data.email
  const indexAdd = email.indexOf('@')
  const indexdot = email.lastIndexOf('.')
  if (indexAdd != -1 && indexAdd < indexdot) {
    const pass = Array.from(data.password)
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWSYZ'
    const lowwer = upper.toLowerCase()
      const digit = '0123456789'
      const special = "@#$%^&*!"
      
    if (pass.length < 8) return 'weak'

      let countlowwer = 0
      let countupper = 0
      let countdigit = 0
      let countspecial =0
    pass.forEach((p) => {
      if (upper.includes(p)) {
          countupper++
      }
      if (lowwer.includes(p)) {
        countlowwer++
      }
      if (digit.includes(p)) {
        countdigit++
      }
      if (special.includes(p)) {
          countspecial++
      }
    })
    
      if (countdigit > 0 && countupper > 0 && countlowwer > 0 && countspecial > 0) {
          return 'Strong'
      }if(countdigit > 0 && countupper >0 && countlowwer > 0) return "Moderate"
  }
    else return undefined
}

console.log(
  emailAndPasswordValidation({
    email: 'tttttt@sanok.com',
    password: 'Elg$017erpF',
  })
)
