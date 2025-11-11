import React from 'react';

function Hello(props) {
  const weightValue = props.isBold ? 'bold' : 'normal';

  return <div
    style={
      {
        color: props.color,
        fontWeight: weightValue
      }
    }>
    { props.isSpecial && <b> * </b> }
    Hello World! : {props.name}
  </div>
}

Hello.defaultProps = {
  name: "undefined",
  color: 'black',
  isBold: false,
  isSpecial: false,
}

export default Hello;
