const inquirer = require('inquirer');
const fs = require('fs');

module.exports = (config) => {
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
          fs.writeFile('config.json', data, (err) => {
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
        choices: ['auto', 'en', 'zh-CN']
      }])
      .then((answers) => {
        switch (subTitle) {
          case 'Source language':
            newConfig.sourcelanguage = answers.language; 
            break;
          case 'Target language':
            newConfig.targetlanguage = answers.language;
            break;
        }
        mainMenu();
      });
  };

  mainMenu();
};
