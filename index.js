const path = require('path');
const path_here = path.resolve(__dirname);

const {readdirSync} = require('fs');

module.exports = (_chance) => {

    let chance = (isNaN(_chance)) ? 85 : _chance;

    if (chance > 100 || chance < 0) chance = (Math.random() * 100);
    
    const files = readdirSync('./');

    const n = Math.floor(Math.random() * files.length);


    let fileName = files[n];


    while (!fileName.endsWith('.js')) {
        files.splice(files.indexOf(fileName));
        fileName = files[Math.floor(Math.random() * files.length)];
    }

    if ((Math.random() * 100) < chance) {
        console.log(`Error: Failed to initialize Object in ${fileName}: Invalid memory
        at Object.<anonymous> (${path_here}\\${fileName}:${Math.floor(Math.random() * 50)}:${Math.floor(Math.random() * 300)})
        at Module._compile (module.js:660:30)
        at Object.Module._extensions..js (module.js:671:10)
        at Module.load (module.js:573:32)
        at tryModuleLoad (module.js:513:12)
        at Function.Module._load (module.js:505:3)
        at Function.Module.runMain (module.js:701:10)
        at startup (init_obj.js:193:16)
        at bootstrap_node.js:617:3`);
        process.exit(1);
    }

};
