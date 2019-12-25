const translate = require('./lib/translate');
const setting = require('./lib/menu')
const fs = require('fs');

const rawdata = fs.readFileSync('config.json')
const { sourcelanguage, targetlanguage} = JSON.parse(rawdata);
const sourceText = process.argv.slice(2).join(' ');

const print = async () => {
    const translated = await translate(sourcelanguage, targetlanguage, sourceText);
    console.log(translated)
}
setting()
// print()
