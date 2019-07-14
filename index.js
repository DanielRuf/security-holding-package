const pkg = require('./package.json');

const supportsColors = typeof process.stdout.hasColors !== 'undefined' 
    ? process.stdout.hasColors()
    : false;

const COLOR = {
    RED: '',
    RESET: ''
}

if(supportsColors) {
    COLOR.RED = "\x1b[31m";
    COLOR.RESET = "\x1b[0m";
}

const MESSAGE = `${pkg.name} is not a real package - aborting process due to security concerns.`;

console.error(`${COLOR.RED}${MESSAGE}${COLOR.RESET}`);

process.kill(process.pid, 'SIGKILL');
process.exit(1);