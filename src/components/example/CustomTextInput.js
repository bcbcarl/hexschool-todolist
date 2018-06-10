import React from 'react';

const CustomTextInput = () => {
  const textInput = React.createRef();
  const handleClick = () => textInput.current.focus();

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
};

export default CustomTextInput;
