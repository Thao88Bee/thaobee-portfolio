const GET_ALL_POSTS = "post/getAllPosts";

export const getAllPostsAction = (posts) => {
  return {
    type: GET_ALL_POSTS,
    payload: posts,
  };
};

export const getAllPostsThunk = () => async (dispatch) => {
  const res = await fetch("/api/posts");
  const data = await res.json();

  dispatch(getAllPostsAction(data));
  return data;
};

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, posts: action.payload.posts };
    default:
      return state;
  }
};

export default postReducer;
