const https = require('https');
const Entites = require('html-entities').XmlEntities;
const entites = new Entites();

const sourceText = entites.encode(process.argv.slice(2).join(' '));
// console.log(sourceText)
// console.log(process.argv)
https.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${sourceText}`, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(JSON.parse(data)[0][0]);
    });
}).on('error', (err) => {
    console.log(err);
});