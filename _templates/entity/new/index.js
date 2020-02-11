const _ = require('lodash');

module.exports = {
  prompt: ({ inquirer, args }) => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Choose a domain name (eg: User or PaymentSystem)'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Choose a name for your entity (do not append Entity)'
      },
    ]).then(res => {
      return {
        domain: _.lowerFirst(res.domain),
        Domain: _.upperFirst(res.domain),
        name: _.lowerFirst(res.name),
        Name: _.upperFirst(res.name),
      };
    })
  }
}
