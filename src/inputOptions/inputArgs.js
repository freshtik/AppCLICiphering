const delQuotes = require('./delQuotes')
const customError = require('../errors/customError')

const inputArgs = (args) => {
    let inputArgs = {}

    const argValue = (option, i) => {
        if (!(option in inputArgs)) {
            inputArgs[option] = delQuotes(args[i + 1])
        } else {
            throw new customError('Error, invalid values')
        }
    }

    args.forEach((flag, i) => {
        if (i % 2 === 0) {
            switch (flag) {
                case '-c':
                case '--config':
                    argValue('config', i)
                    break;

                case '-i':
                case '--input.txt':
                    argValue('input', i)
                    break;

                case '-o':
                case '--output':
                    argValue('output', i)
                    break;

                default:
                    throw new customError('Error, invalid values')
            }
        }
    })
    if (!inputArgs) {
        throw new customError('Error, configuration was not transferred!!')
    }
    return inputArgs;
}

module.exports = inputArgs
