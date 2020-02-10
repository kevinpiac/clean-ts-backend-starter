module.exports = {
  '': {
    get: (_:any, res) => {
      res.ok({ health: 'OK' });
    },
  },
};
