const errorHandler = (err) => {
    const { isCustom } = err;
    if (isCustom){
        console.log("Error with input data")
    } else {
        throw err;
    }
}

module.exports = errorHandler