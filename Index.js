 // os module import karo
const os = require('os');

// Welcome message
console.log('Welcome to WebTeam Node.js Internship!');

// System-related info
console.log('--- System Info ---');
console.log('Platform      : '+ os.platform());
console.log('CPU Arch      : '+ os.arch());
console.log('Free Memory   : '+ Math.round(os.freemem() / 1024 / 1024)+' MB');
