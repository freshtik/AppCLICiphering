const { alphabet, indexSymbol} = require('./common')

const atbash = (string) => {

    let newString = '';
    const n = alphabet.length;

    for (let i = 0; i < string.length; i++) {

        if (/[a-zA-Z]/.test(string[i])) {
            const registerUpper = (string[i] === string[i].toUpperCase())
            const symbol = string[i].toLowerCase()
            const newIndex = n - (indexSymbol(symbol) + 1);
            const newSymbol = (registerUpper) ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];

            newString = newString.concat(newSymbol)
        } else {
            newString = newString.concat(string[i])
        }
    }
    return newString
}

module.exports = atbash