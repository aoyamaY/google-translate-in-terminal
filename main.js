const superagent = require('superagent');
const Entites = require('html-entities').XmlEntities;
const entites = new Entites();

const sourceText = entites.encode(process.argv.slice(2).join(' '));

superagent
  .get('https://translate.googleapis.com/translate_a/single')
  .query({
    client: 'gtx',
    sl: 'auto',
    tl: 'zh-CN',
    dt: 't',
    q: sourceText
  })
  .end((err, res) => {
    if (err) { console.log(err); }
    const result = res.body[0].map(element => element[0]).join(' ');
    console.log(res.body[0][0][0])
    console.log(result);
  })

// https.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${sourceText}`, (res) => {
//     let data = '';
//     res.on('data', (chunk) => {
//         data += chunk;
//     });
//     res.on('end', () => {
//         const result = JSON.parse(data)[0].map(element => element[0]).join(' ');
//         console.log(result);
//     });
// }).on('error', (err) => {
//     console.log(err);
// });