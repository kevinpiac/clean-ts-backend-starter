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
      name: 'interface',
      message: 'Choose an interface name to implement (DefaultInterface)'
    }).then(res => {
      return {
        interface: res.interface,
        Interface: _.upperFirst(res.interface),
        name: args.name,
        Name: _.upperFirst(args.name),
      };
    })
  }
}
