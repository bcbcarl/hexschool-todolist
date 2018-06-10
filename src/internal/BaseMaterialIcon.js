import React from 'react';

const BaseMaterialIcon = props => {
  const { icon, size, style } = props;
  const Icon = icon;

  let newStyle;
  switch (size) {
    case 'xs':
      newStyle = { fontSize: '0.75em' };
      break;
    case 'sm':
      newStyle = { fontSize: '0.875em' };
      break;
    case 'lg':
      newStyle = { fontSize: '1.33em', verticalAlign: '-25%' };
      break;
    case '2x':
    case '3x':
    case '4x':
    case '5x':
    case '6x':
    case '7x':
    case '8x':
    case '9x':
    case '10x':
      newStyle = { fontSize: `${size.slice(0, -1)}em` };
      break;
    default:
      break;
  }
  return <Icon style={{ ...newStyle, ...style }} />;
};

export default BaseMaterialIcon;
