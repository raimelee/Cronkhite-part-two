document.write(`Mini Golf`);
console.log(`Mini Golf`);
console.warn(`Winner Takes All!`);

let parThree = 9
let parSix = 18


let myName = prompt(`Welcome to Mini Golf! What's your name?`);
alert(`Hello, ${myName}! Let's play!`);
console.log(`Hello ${myName}! Let's play!`);

let holeCount = prompt('How many holes are you playing today: 3 or 6?')
let totalScore = 0
for (let i = 0; i < holeCount; i++) {
    let putts = Number(prompt(`Enter putt count for hole ` + (i + 1)));
    totalScore += putts;
}

if (holeCount == 3 && totalScore < parThree) {
    alert(`Great job, ${myName}! Your total par was: -${totalScore}`)
    console.log(`Great job, ${myName}! Your total par was: -${totalScore}`)
} else if (holeCount == 3 && totalScore > parThree) {
    alert(`Nice try, ${myName}! Your total par was: +${totalScore}`)
    console.log(`Nice try, ${myName}! Your total par was: +${totalScore}`)
} else if (holeCount == 6 && totalScore < parSix) {
    alert(`Great job, ${myName}! Your total par was: -${totalScore}`)
    console.log(`Great job, ${myName}! Your total par was: -${totalScore}`)
} else if (holeCount == 6 && totalScore > parSix) {
    alert(`Nice try, ${myName}! Your total par was: +${totalScore}`)
    console.log(`Nice try, ${myName}! Your total par was: +${totalScore}`)
} else if (holeCount == 3 && totalScore == parThree) {
    alert(`Great job, ${myName}! Your total par was: 0`)
    console.log(`Great job, ${myName}! Your total par was: 0`)
} else if (holeCount == 6 && totalScore == parSix) {
    alert(`Great job, ${myName}! Your total par was: 0`)
    console.log(`Great job, ${myName}! Your total par was: 0`)
}
