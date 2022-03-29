const delQuotes = (str) => {
    let lastIndex = str.length - 1

    return newStr = (str[0] === "'" && str[lastIndex] === "'")
        ? str.slice(1, lastIndex)
        : str
}

module.exports = delQuotes