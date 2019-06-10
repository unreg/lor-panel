import * as types from '../../actions/action-types';


export function keepNavigatorPosition(data) {
  return {
    type: types.KEEP_NAVIGATOR_POSITION,
    data
  };
};


export function setNavigatorVisitedList(data) {
  return {
    type: types.SET_NAVIGATOR_VISITED_LIST,
    data
  };
};


export function setNavigatorVisitedLast(data) {
  return {
    type: types.SET_NAVIGATOR_VISITED_LAST,
    data
  };
};
