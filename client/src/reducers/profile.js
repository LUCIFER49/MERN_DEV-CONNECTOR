import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, GET_REPOS } from '../action/types';

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
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      }
      
    default:
      return state;
  }
}
