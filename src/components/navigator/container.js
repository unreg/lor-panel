import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/container';
import Panel from '../panel/container';

import { goToLastComment } from '../../api/lor';

import { store } from '../../store';
import { keepNavigatorPosition } from './actions';


class Navigator extends React.Component {

  componentDidMount() {
    goToLastComment();
  };

  _keepPosition = (top, left) => {
    store.dispatch(keepNavigatorPosition({top, left}));
  };

  _onSectionClick = section => () => {
    document.location.href = `https://www.linux.org.ru/${section}/`;
  };

  render() {
    return (
      <Panel keepPosition={this._keepPosition}
             top={this.props.data.position.top} left={this.props.data.position.left} >

        <Button icon={'chevron-up'} onClick={() => { window.scroll(0, 0); }} />
        <Button icon={'rss'} onClick={this._onSectionClick('tracker')} />
        <Button icon={'bug'} onClick={this._onSectionClick('forum/development')} />
        <Button icon={'comments'} onClick={this._onSectionClick('forum/talks')} />
        <Button icon={'bell'} onClick={this._onSectionClick('notifications')} />
        <Button icon={'chevron-down'} onClick={() => { window.scroll(0, document.body.scrollHeight); }} />
      </Panel>
    );
  }
}


const mapStateProps = store => ({
  data: store.NavigatorState.NavigatorData
});

export default connect(mapStateProps)(Navigator);
