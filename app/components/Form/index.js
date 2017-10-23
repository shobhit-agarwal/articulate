import React from 'react';

export function Form(props) {
  
  return (
    <div id="form-section">
      {React.Children.toArray(props.children)}
    </div>
  );
}

Form.propTypes = {
  children: React.PropTypes.node,
};

export default Form;
