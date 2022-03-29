class customError extends Error {
    constructor(message, error_code = 1) {
        super(message);
        this.name = 'customError'
        this.isCustom = true;
    }
}

module.exports = customError