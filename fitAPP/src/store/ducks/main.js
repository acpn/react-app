/**
 * Action Types
 */
export const Types = {
  LOAD_USER_REQUEST: 'LOAD_USER_REQUEST',
  LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE: 'LOAD_USER_FAILURE'
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_USER_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_USER_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case Types.LOAD_USER_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loadUserRequest: () => ({
    type: Types.LOAD_USER_REQUEST
  }),

  loadUserSuccess: data => ({
    type: Types.LOAD_USER_SUCCESS,
    payload: { data }
  }),

  loadUserFailure: () => ({
    type: Types.LOAD_USER_FAILURE
  })
};
