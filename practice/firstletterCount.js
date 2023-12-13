// Write a function capitalizeWordCount(sentence) that takes a sentence and make it to a new sentence
// where the first letter of each word is capitalized, and the rest of the letters are in lowercase.and
// · return undefinded if sentence is not a String.
// · returns an object representing the count of each unique word in the sentence.[{and :1}, {new :3} ,{sentence:1}]

function capitalizeWordCount(sentence) {
  const arrsen = sentence.split(' ')
  const frist = arrsen.map((f) => {
    return f[0].toUpperCase() + f.slice(1) //[ 'And', 'Make', 'It', 'To', 'A', 'New', 'Sentence' ]
  })//ถ้าใส่{ }อย่าลืม return ด้วยนะ //f.slice(1,length) 
    const objuni = {}
    const uni = frist.findIndex((sent)=> )
    const uniarr = frist.filter((p, index) => frist.indexOf(p) === index)
    
}

console.log(capitalizeWordCount('and make it to a new new new sentence'))
