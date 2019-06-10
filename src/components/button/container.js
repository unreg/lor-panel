import React from 'react';


const styles = {
  button: {
    padding: '0.3em',
    cursor: 'pointer'
  }
}

class Button extends React.Component {

  render() {
    const { icon, onClick = () => {} } = this.props;

    return (
      <div style={styles.button} onClick={onClick} >
        <i className={`fas fa-${icon}`} ></i>
      </div>
    );
  }
}


export default Button;
