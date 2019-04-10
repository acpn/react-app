import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import {
  Creators as loginActions,
  Types as loginTypes
} from '~/store/ducks/signin';

import {
  Creators as mainActions,
  Types as mainTypes
} from '~/store/ducks/main';

import {
  Creators as checkActions,
  Types as checkTypes
} from '~/store/ducks/checkUser';

function* login(action) {
  const { email, password } = action.payload;
  try {
    // Same as await
    yield call(api.get, '/session', {
      params: {
        email: email,
        password: password
      }
    });

    // Same as dispatch
    yield put(loginActions.loginSuccess(email, password));
    yield put(checkActions.userLogged());
    //navigate('Main'); >> Não funciona mais tem que ver como disparar o index
  } catch (_err) {
    yield put(loginActions.loginFailure());
    //this.setState({
    //  error: 'Houve um problema com o login, verifique suas credenciais!'
    //});
  }
}

function* loadUsers() {
  try {
    const { username, password } = yield select(state => state.login);

    const response = yield call(api.get, '/session', {
      params: {
        email: username,
        password: password
      }
    });
    yield put(mainActions.loadUserSuccess(response.data));
    
  } catch (err) {
    yield put(mainActions.loadUserFailure());
  }
}

function* checkUsers() {
  try {
      put(checkActions.userLogged());
  } catch (err) {
    yield put(checkActions.checkFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(loginTypes.REQUEST, login),
    takeLatest(mainTypes.LOAD_USER_REQUEST, loadUsers),
    takeLatest(checkTypes.LOGGED, checkUsers)
  ]);
}
