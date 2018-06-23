module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
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
    'transform-react-remove-prop-types',
    'styled-components'
  ]
};
