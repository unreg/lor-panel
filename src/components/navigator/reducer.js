import * as types from '../../actions/action-types';


const initialState = {
  NavigatorData: {
    position: {
        top: 100,
        left: 100
    },
    visited: [],
    visited_last: {}
  }
}


const NavigatorReducer = function(state=initialState, action) {
  switch(action.type) {

    case types.KEEP_NAVIGATOR_POSITION:
      return Object.assign({}, state, {
        NavigatorData: Object.assign({}, state.NavigatorData, {
          position: action.data
        })
      });

    case types.SET_NAVIGATOR_VISITED_LIST:
      return Object.assign({}, state, {
        NavigatorData: Object.assign({}, state.NavigatorData, {
          visited: action.data
        })
      });

    case types.SET_NAVIGATOR_VISITED_LAST:
      return Object.assign({}, state, {
        NavigatorData: Object.assign({}, state.NavigatorData, {
          visited_last: action.data
        })
      });

    default: return state;
  }
}


export default NavigatorReducer;
