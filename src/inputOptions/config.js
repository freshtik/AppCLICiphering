const errorsConfig = require('../errors/errorsConfig')

const config = (args) => {
    const argsConf = args.split('-');

    return argsConf.map((el) => {
        errorsConfig(el)

        return (el[0] === 'A' && el.length === 2) ?'A' : el;
    })
}

module.exports = config