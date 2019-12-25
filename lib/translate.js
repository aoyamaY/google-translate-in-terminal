const superagent = require('superagent');
const Entites = require('html-entities').XmlEntities;
const entites = new Entites();

module.exports = async (sourcelanguage, targetlanguage, sourceText) => {
  const st = entites.encode(sourceText);
  try {
    const res = await superagent
      .get('https://translate.googleapis.com/translate_a/single')
      .query({
        client: 'gtx',
        sl: sourcelanguage,
        tl: targetlanguage,
        dt: 't',
        q: st
      });
    const translated = res.body[0].map(element => element[0]).join(' ');
    return translated;
  } catch (err) {
    console.error(err);
  }
};
