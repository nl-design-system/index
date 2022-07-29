const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: [
    ...minorConfig.reject,
    // We don't yet use Node 17 so the types of node should also be locked at 16.
    '@types/node',
  ],
};
