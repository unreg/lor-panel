import React from 'react';


const styles = {
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    position: 'fixed',

    margin: '0.3em',
    backgroundColor: 'rgba(0, 0, 0, 0.42)'
  },

  upStick: {
    height: '0.7em',
    width: '100%',
    cursor: 'move',

    borderRadius: '0.35em 0.35em 0em 0em',
    backgroundColor: 'rgba(100, 100, 100, 0.62)',
  },

  downStick: {
    height: '0.7em',
    width: '100%',

    cursor: 'move',

    borderRadius: '0em 0em 0.35em 0.35em',
    backgroundColor: 'rgba(100, 100, 100, 0.62)'
  }
}


class Panel extends React.Component {

  state = {
    top: this.props.top,
    left: this.props.left,
    dX: 0, dY: 0
  };

  _onMouseDown = e => {
    this.setState({
      dX: e.pageX - this.state.left,
      dY: e.pageY - this.state.top,
    });

    window.addEventListener('mouseup', this._onMouseUp, true);
    window.addEventListener('mousemove', this._onMouseMove, true);
  };

  _onMouseUp = () => {
    window.removeEventListener('mousemove', this._onMouseMove, true);
    window.removeEventListener('mouseup', this._onMouseUp, true);

    this.props.keepPosition(this.state.top, this.state.left);
  };

  _onMouseMove = e => {
    this.setState({
      left: e.pageX - this.state.dX,
      top: e.pageY - this.state.dY,
    });
  };

  render() {
    return (
      <div style={Object.assign({}, styles.panel, {top: `${this.state.top}px`, left: `${this.state.left}px`})} >
        <div style={styles.upStick} onMouseDown={this._onMouseDown} />
        {this.props.children}
        <div style={styles.downStick} onMouseDown={this._onMouseDown} />
      </div>
    );
  }
}


export default Panel;
