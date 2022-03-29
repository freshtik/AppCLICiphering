const customError = require('./customError')

const errorsConfig = (el) => {
    if (el.length > 2) throw new customError('Error, many arguments!')
    if (el[0] !== 'A' && el[0] !== 'C' && el[0] !== 'R') throw new customError('Error, app have 3 types of ciphers, where' +
        'A - Atbash, C - caesar, R - ROT-8')
    if (el[0] === 'C' || el[0] === 'R')   {
        if (el.length !== 2){
            throw new customError("Error, for ciphers Caesar and ROT-8 must be indicated cipher's type")
        } else if (el[1] !== '0' && el[1] !== '1'){
            throw new customError("Error in argument, check encryption type (1 - encryption, 0 - decryption):)")
        }
    }
    if (el[0] === 'A' && el.length === 2){
        if (el[1] !== '0' && el[1] !== '1'){
            throw new customError("Error in argument, check encryption type (1 - encryption, 0 - decryption)" +
                "Hm. but cipher Atbash isn't use encryption type, thus can't enter it :)")
        }
    }
}

module.exports = errorsConfig