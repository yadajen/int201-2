function getPassingName(studentScores) {
    const arr= []
    for (let i = 0; i < studentScores.length; i++) {
        if (studentScores[i].score>=70) {
            arr.push(studentScores[i].name.toUpperCase())
        }
    }
    return arr
}

const studentScores = [ 
    {name:'Alice', score: 55},
    {name:'Poy', score: 90},
    {name:'James', score: 100},

]
console.log(getPassingName(studentScores))