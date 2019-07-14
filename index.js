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

console.error(`${COLOR.RED}${pkg.name} is not a real package - aborting process due to security concerns.${COLOR.RESET}`);

process.kill(process.pid, 'SIGKILL');
process.exit(1);