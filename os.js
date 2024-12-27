const os = require("os");

// Log the platform of the operating system
console.log(os.platform()); // This will output something like 'win32', 'linux', etc.
// Example output: 'win32'

// Log the architecture of the operating system
console.log(os.arch()); // This will output the architecture, e.g., 'x64', 'arm', etc.
// Example output: 'x64'

// Log the amount of free memory in bytes
console.log(os.freemem()); // This will output the free memory in bytes
//3880284160
console.log(os.freemem()/1024/1024/1024);
//3.556194305419922
// Log the total amount of system memory in bytes
console.log(os.totalmem()); // This will output the total memory in bytes
//8495046656
