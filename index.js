// Code your solutions in this file
function writeCards(arrayName, eventName) {
    const thankYou = [];
    for (let x = 0; x < arrayName.length; x++) {
        thankYou.push(`Thank you, ${arrayName[x]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}