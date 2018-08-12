import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { handleClick, text } = this.props;
    const style = { width: '70px', height: '45px', borderRadius: '22.5px', backgroundColor: '#aaaaaa', textAlign: 'center',  };

    return (
      <button style={style} onClick={() => handleClick()}  >
        <div>{text}</div>
      </button>
    );
  }
}

export default Button;