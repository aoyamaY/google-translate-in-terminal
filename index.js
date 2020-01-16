#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const clipboardy = require('clipboardy');
const setting = require('./lib/setting');
const translate = require('./lib/translate');

const rawdata = fs.readFileSync(path.join(__dirname, 'config.json'));
const config = JSON.parse(rawdata);

const main = async () => {
  if (process.argv[2] === '--setting') {
    setting(config);
  } else {
    let sourceText;
    if (process.argv[2] === undefined) {
      sourceText = clipboardy.readSync();
    } else {
      sourceText = process.argv.slice(2).join(' ');
    }
    const translated = await translate(config.sourcelanguage, config.targetlanguage, sourceText);
    console.log(`\nTranslation:\n${translated}`);
  }
};

main();
