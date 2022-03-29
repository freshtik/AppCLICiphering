const { Transform } = require('stream');

class MyTransform extends Transform {
    constructor(options) {
        super();
        this.config = options.config;
        this.encryption = options.encryption
    }

    _transform(chunk, encoding, callback) {
        const data = this.encryption(this.config, chunk.toString())
        this.push(data)
        callback();
    }
}

module.exports = MyTransform