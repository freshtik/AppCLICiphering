const { argv, stdout, stdin, stderr, exit } = require('process');

const { inputArgs, config } = require('./src/inputOptions')
const encryption = require('./src/ciphers/encryption')
const { ReadStream, WritableStream, MyTransform } = require('./src/streams')
const errorHandler = require('./src/errors/errorHandler')

try {

    const args = argv.slice(2);

    const options = inputArgs(args);
    const optionConfig = config(options.config)

    const readable = (options.input) ? new ReadStream(options.input) : stdin
    const writable = (options.output) ? new WritableStream(options.output) : stdout;
    const transform = new MyTransform({config: optionConfig, encryption: encryption})

    readable
        .pipe(transform)
        .pipe(writable)

} catch (error) {
    errorHandler(error);
    exit(1);
}