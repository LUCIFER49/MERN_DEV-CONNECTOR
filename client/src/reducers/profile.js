import { GET_PROFILE, PROFILE_ERROR } from '../action/types';

const initialState = {
  profile: null, //holds the user data
  profiles: [], //for profile listing page
  repos: [], //for holding repos
  loading: true,
  error: {}, //for error in request
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
