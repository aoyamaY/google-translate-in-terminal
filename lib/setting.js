const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

module.exports = (config) => {
  const rawdata = fs.readFileSync(path.join(__dirname, '../languages.json'));
  const {longName, shortName} = JSON.parse(rawdata);

  let subTitle;
  let newConfig = config;

  const mainMenu = () => {  
    inquirer
      .prompt([{
        type: 'list',
        message: 'Setting',
        name: 'setting',
        choices: ['Source language', 'Target language', '<Exit>']
      }])
      .then(answers => {
        if (answers.setting === '<Exit>') {
          const data = JSON.stringify(newConfig);
          fs.writeFile(path.join(__dirname, '../config.json'), data, (err) => {
            if (err) {
            console.log(err);
            } else {
              console.log('\nSettings saved.');
            }
          });
        } else {
          subTitle = answers.setting;
          subMenu();
        }
      });
  };

  const subMenu = () => {
    inquirer
      .prompt([{
        type: 'list',
        message: subTitle,
        name: 'language',
        choices: longName
      }])
      .then((answers) => {
        const serial = longName.indexOf(answers.language);
        switch (subTitle) {
          case 'Source language':
            newConfig.sourcelanguage = shortName[serial]; 
            break;
          case 'Target language':
            newConfig.targetlanguage = shortName[serial];
            break;
        }
        mainMenu();
      });
  };

  mainMenu();
};
