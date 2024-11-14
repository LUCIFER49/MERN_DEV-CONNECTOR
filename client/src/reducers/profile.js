import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE } from '../action/types';

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

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    
    case CLEAR_PROFILE: 
      return{
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
      
    default:
      return state;
  }
}
