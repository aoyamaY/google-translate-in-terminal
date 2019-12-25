var inquirer = require('inquirer');
let subTitle;
const mainMenu = () => {
  inquirer
    .prompt([{
      type: 'list',
      message: 'Setting',
      name: 'setting',
      choices: ['Source language', 'Target language']
    }])
    .then(answers => {
      subTitle = answers.setting
      subMenu()
    });
};

const subMenu = () => {
  inquirer
    .prompt([{
      type: 'list',
      message: subTitle,
      name: subTitle,
      choices: ['auto', 'en', 'zh-CN']
    }])
    .then(answers => {
      mainMenu()
    })
};


mainMenu()