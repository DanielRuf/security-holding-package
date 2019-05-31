const pkg = require('./package.json');

const supportsColors = typeof process.stdout.hasColors !== 'undefined' 
    ? process.stdout.hasColors()
    : false;

if(supportsColors) {
    console.error(`\x1b[31m${pkg.name} is not a real package - aborting process due to security concerns.\x1b[0m`);
} else {
    console.error(`${pkg.name} is not a real package - aborting process due to security concerns.`);
}

process.kill(process.pid, 'SIGKILL');
process.exit(1);