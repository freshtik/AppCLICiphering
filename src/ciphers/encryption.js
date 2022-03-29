const atbash = require('./atbash')
const caesar = require('./caesar')

const encryption = (confAr, data) => {
    if (confAr.length === 0) return data

    if (confAr[0] === 'A') {
        return encryption (confAr.splice(1), atbash(data))
    } else {
        return encryption (confAr.splice(1), caesar(data, confAr[0]))
    }
}

module.exports = encryption