import { combineReducers } from 'redux';

import NavigatorReducer from '../components/navigator/reducer';


var reducers = combineReducers({
  NavigatorState: NavigatorReducer,
})


export default reducers;
