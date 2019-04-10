/**
 * Action Types
 */
export const Types = {
  LOGGED: 'USER_LOGGED',
  OUT: 'USER_OUT',
  FAILURES: 'LOGIN_FAILURE'
};
/**
 * Reducer
 */

const INITIAL_STATE = {
  isLogged: false,
  checkedLoggedIn: false
};

export default function check(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGGED:
      return { ...state, isLogged: true, checkedLoggedIn: true };
    case Types.OUT:
      return { ...state, isLogged: false, checkedLoggedIn: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  userOut: () => ({
    type: Types.OUT
  }),

  userLogged: () => ({
    type: Types.LOGGED
  }),

  checkFailure: () => ({
    type: Types.FAILURES
  })
};
