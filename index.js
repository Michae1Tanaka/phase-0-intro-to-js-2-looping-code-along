// Code your solutions in this file
function writeCards(arrayName, eventName) {
    const thankYou = [];
    for (let x = 0; x < arrayName.length; x++) {
        thankYou.push(`Thank you, ${arrayName[x]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou
}

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
debugger
}