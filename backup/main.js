const fs = require('fs');
const superagent = require('superagent');
const Entites = require('html-entities').XmlEntities;
const entites = new Entites();

const rawdata = fs.readFileSync('config.json')
const { sourcelanguage, targetlanguage} = JSON.parse(rawdata);

const sourceText = entites.encode(process.argv.slice(2).join(' '));

superagent
  .get('https://translate.googleapis.com/translate_a/single')
  .query({
    client: 'gtx',
    sl: sourcelanguage,
    tl: targetlanguage,
    dt: 't',
    q: sourceText
  })
  .end((err, res) => {
    if (err) { console.log(err); }
    const result = res.body[0].map(element => element[0]).join(' ');
    console.log(result);
  });
