const alphabet = require('./alphabet.js');

const indexSymbol = (symbol) => {
    const n = alphabet.length
    for (let i = 0; i < n; i++){
        if(symbol === alphabet[i]){
            return i;
        }
    }
}

// console.log(indexSymbol('a'))

module.exports = indexSymbol
