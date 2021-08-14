const execute = require('rollup-plugin-execute')

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
        config.watch = {
            exclude: ['node_modules/**', 'sandbox/**']
        }
        config.plugins.push(execute('yalc publish --push'))
        return config; // always return a config.
    },
};