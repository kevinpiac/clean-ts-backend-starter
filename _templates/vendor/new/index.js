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
        name: 'name',
        message: 'Choose a name for your vendor'
      },
      {
        type: 'input',
        name: 'interface',
        message: 'Choose an interface name to implement (DefaultInterface)'
      },
    ]).then(res => {
      return {
        interface: _.lowerFirst(res.interface),
        Interface: _.upperFirst(res.interface),
        name: _.lowerFirst(res.name),
        Name: _.upperFirst(res.name),
      };
    })
  }
}
