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
    navigate('Main');
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

export default function* rootSaga() {
  return yield all([
    takeLatest(loginTypes.REQUEST, login),
    takeLatest(mainTypes.LOAD_USER_REQUEST, loadUsers)
  ]);
}
