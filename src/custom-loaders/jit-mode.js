const path = require("path");
const fs = require('fs');

module.exports = function () {
    //console.log('source------>', source)
    return fs.readFileSync(path.resolve(__dirname, "../scss/tailwindcss/index.scss"), 'utf8')
}