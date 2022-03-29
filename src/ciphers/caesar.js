const { alphabet, indexSymbol } = require('./common')

const caesar = (string, code) =>{
    let newString = '';
    const n = alphabet.length

    const key = (code[0] === 'C') ?1 :8;
    let type = code[1]

    for (let i = 0; i < string.length; i++) {

        if (/[a-zA-Z]/.test(string[i])) {
            const registerUpper = (string[i] === string[i].toUpperCase());
            const symbol = string[i].toLowerCase()
            let newIndex

            switch (type) {
                case '1':
                    newIndex = (indexSymbol(symbol) + key) % n;
                    break
                case '0':
                    newIndex = (indexSymbol(symbol) - key + (Math.ceil(key / n) * n)) % n;
                    break
                default:
                    console.log('Error')
            }
            const newSymbol = (registerUpper) ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
            newString = newString.concat(newSymbol)
        } else {
            newString = newString.concat(string[i])
        }
    }
    return newString
}

module.exports = caesar