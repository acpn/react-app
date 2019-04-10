import { combineReducers } from 'redux';

import login from './signin';
import main from './main';
import checkUsr from './checkUser';

export default combineReducers({
  login,
  main,
  checkUsr
});
