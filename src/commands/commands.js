const glob = require("glob-promise");
const path = require("path");

module.exports = (bot) => {
    
    const DIVISION = /.+(?=command)/;

    var commands = {};

    glob(path.join(__dirname, "*command.js")).then(files => {
        for(let file of files) {
            try {
                const basename = path.basename(file);
                require("./" + basename)(bot);
                const cmd = DIVISION.exec(basename)[0];
                commands[cmd] = basename; 
            } catch(err) {
                console.log(err);
            }
        }
    });
}