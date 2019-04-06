/**
 * Action Types
 */
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURES: 'LOGIN_FAILURE'
};
/**
 * Reducer
 */

const INITIAL_STATE = {
  email: null,
  password: null,
  error: false,
  loading: false
};

export default function signin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        username: action.payload.email,
        password: action.payload.password,
        erro: false,
        loading: false
      };
    case Types.FAILURES:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  loginRequest: (email, password) => ({
    type: Types.REQUEST,
    payload: { email, password }
  }),

  loginSuccess: (email, password) => ({
    type: Types.SUCCESS,
    payload: { email, password }
  }),

  loginFailure: () => ({
    type: Types.FAILURES
  })
};
