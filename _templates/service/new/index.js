const _ = require('lodash');

// module.exports = {
//   params: ({ args }) => {
//     return {
//       domain: args.domain,
//       name: args.name,
//       Domain: _.capitalize(args.domain),
//     }
//   }
// }

module.exports = {
  prompt: ({ prompter, args }) => {
    return prompter.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Choose a domain name (eg: User or PaymentSystem)'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Choose a name for your service (eg: UserService)'
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
