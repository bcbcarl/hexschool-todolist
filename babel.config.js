module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    [
      'ramda',
      {
        useES: true
      }
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-react-constant-elements',
    'react-hot-loader/babel',
    'transform-react-remove-prop-types',
    'styled-components'
  ]
};
