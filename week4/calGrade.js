let score = 50
let grade
// <=40 is 'F', 41-70 is 'B', 71-100 'A'
if (score < 0 && score > 100) grade = "invalid scores"
else {
  if (score <= 40) grade = "F"
  else if (score <= 70) grade = "B"
  else grade = "A"
}
console.log(grade)

let gradeMeaning
switch (grade) {
  case "F":
    gradeMeaning = "Need Improvement"
    break
  case "B":
    gradeMeaning = "Good"
    break
  case "A":
    gradeMeaning = "Very Good"
    break
  default:
    gradeMeaning = "No Meaning"
    break
}
console.log(gradeMeaning)

let ch = "p"
let isVowel = false
switch (ch) {
  case "A":
  case "a":
  case "E":
  case "e":
  case "I":
  case "i":
  case "O":
  case "o":
  case "U":
  case "u":
    isVowel = true
}
console.log(isVowel)
