import { combineReducers } from 'redux';

import login from './signin';
import main from './main';
//import app from './app';

export default combineReducers({
  login,
  main
  //  app
});
