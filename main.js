const { generatePossibilitiesBetween } = require('./utils/generatePossibilities')

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !”#$%&’()*+,-./:;<=>?@[]^_`{|}~\\\''

const min = 1
const max = 2

console.log('Number of chars : ', chars.length)
let numberOfPossibilities = 0
for (let i = min; i <= max; i++) {
    numberOfPossibilities += Math.pow(chars.length, i)
}
console.log('Number of possibilities : ', numberOfPossibilities)
const possibilities = generatePossibilitiesBetween(chars, min, max).length
console.log('Prossibilities : ', possibilities)
//console.log(generatePossibilitiesBetween(chars, min, max))
