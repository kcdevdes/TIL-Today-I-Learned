import React from 'react';

function Wrapper(props) {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };

  return (
    <div style={style}>
      {/* props.children */}
      {props.children}
    </div>
  )
}

export default Wrapper;