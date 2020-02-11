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
    return prompter.prompt({
      type: 'input',
      name: 'domain',
      message: 'Choose a domain name (eg: UserManagement or PaymentSystem)'
    }).then(res => {
      return {
        domain: res.domain,
        Domain: _.upperFirst(res.domain),
        name: args.name,
        Name: _.upperFirst(args.name),
      };
    })
  }
}
