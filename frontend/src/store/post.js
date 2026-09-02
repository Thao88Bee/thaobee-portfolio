import { csrfFetch } from "./csrf";

const GET_ALL_POSTS = "post/getAllPosts";
const CREATE_POST = "post/createPost";

export const getAllPostsAction = (posts) => {
  return {
    type: GET_ALL_POSTS,
    payload: posts,
  };
};

export const createPostAction = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const getAllPostsThunk = () => async (dispatch) => {
  try {
    const res = await fetch("/api/posts");

    if (res.ok) {
      const data = await res.json();
      dispatch(getAllPostsAction(data));
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  } catch (error) {
    return error;
  }
};

export const createPostThunk = (newPost) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/posts", {
      method: "POST",
      headers: {
        "Context-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(createPostAction(data));
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  } catch (error) {
    return error;
  }
};

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, posts: action.payload.posts };
    case CREATE_POST:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
