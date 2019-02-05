module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }], // should be first plugin listed
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime'
  ],
  presets: ['@babel/preset-env', '@babel/preset-react']
};
