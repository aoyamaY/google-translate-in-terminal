const fs = require('fs');
const setting = require('./lib/setting');
const translate = require('./lib/translate');

const rawdata = fs.readFileSync('config.json')
const config = JSON.parse(rawdata);

const main = async () => {
  if (process.argv[2] === '--setting') {
    setting(config);
  } else {
    const sourceText = process.argv.slice(2).join(' ');
    const translated = await translate(config.sourcelanguage, config.targetlanguage, sourceText);
    console.log(`\nTranslation:\n${translated}`);
  }
};

main();
