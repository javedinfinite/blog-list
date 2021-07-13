import Actions from "../actionConstants/blogActionConstants";
import {
  getBlogListApi,
  getBlogApi,
  addBlogApi,
  getBlogCommentsApi,
  addBlogCommentApi,
  addBlogNestedCommentApi,
} from "../apis";

export const getBlogList = (pageNumber, pageLimit, blogId = "") => {
  return async (dispatch) => {
    dispatch({ type: Actions.BLOGLIST_REQUESTED });

    try {
      let response = await getBlogListApi(pageNumber, pageLimit, blogId);
      dispatch({
        type: Actions.BLOGLIST_RECEIVED,
        payload: { blogList: response },
      });
    } catch (e) {
      dispatch({
        type: Actions.BLOGLIST_ERROR,
        error: "API to get blog list is failed with error : " + e,
      });
    }
  };
};

export const getBlog = (blogId) => {
  return async (dispatch) => {
    dispatch({ type: Actions.BLOG_REQUESTED });
    try {
      let response = await getBlogApi(blogId);
      dispatch({
        type: Actions.BLOG_RECEIVED,
        payload: { blog: response },
      });
    } catch (e) {
      dispatch({
        type: Actions.BLOG_ERROR,
        error: "API to get blog is failed with error : " + e,
      });
    }
  };
};

export const addBlog = (title, content) => {
  return async (dispatch) => {
    try {
      let response = await addBlogApi(title, content);
    } catch (e) {
      console.log("I am from error: ", e);
    }
  };
};

export const getBlogComments = (blogid) => {
  return async (dispatch) => {
    dispatch({ type: Actions.COMMENT_REQUESTED });
    try {
      let response = await getBlogCommentsApi(blogid);
      if (response) {
        dispatch({
          type: Actions.COMMENT_RECEIVED,
          payload: { currentComment: response },
        });
      }
    } catch (e) {
      dispatch({
        type: Actions.COMMENT_ERROR,
        error: "API to get comments is failed with error : " + e,
      });
    }
  };
};

export const addBlogComment = (name, comment, blogid) => {
  return async (dispatch) => {
    try {
      await addBlogCommentApi(name, comment, blogid);
    } catch (e) {
      console.log("I am from error: ", e);
    }
  };
};

export const addBlogNestedComment = (name, comment, id, blogid) => {
  return async (dispatch) => {
    try {
      let response = await addBlogNestedCommentApi(name, comment, id, blogid);
    } catch (e) {
      console.log("I am from error: ", e);
    }
  };
};
