import { GET_POSTS, POST_ERROR } from '../action/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
  error: {},
};

export default function (state = initialState) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
  }
}
