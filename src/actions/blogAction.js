import Actions from "../actionConstants/blogActionConstants";
import { getBlogListApi, getBlogApi, addBlogApi, getBlogCommentsApi, addBlogCommentApi, addBlogNestedCommentApi } from "../apis";

export const getBlogList = (pageNumber, pageLimit, blogId='') => {
  return async (dispatch) => {
    dispatch({ type: Actions.BLOGLIST_REQUESTED });

    try {
      let response = await getBlogListApi(pageNumber, pageLimit, blogId);
      // console.log("response..........."+JSON.stringify(response))
      // console.log("response..........."+ response[0].title)
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
      console.log("response from getBlog action..........."+JSON.stringify(response))
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
      console.log("I am from error: ",e)
 
    }
  };
};


export const getBlogComments = (blogid) => {
  console.log("blogid obtained in getBlogComments function........", blogid)
  return async (dispatch) => {
    dispatch({ type: Actions.COMMENT_REQUESTED });
    try {
      let response = await getBlogCommentsApi(blogid);
      if(response){
        dispatch({
          type: Actions.COMMENT_RECEIVED,
          payload: { currentComment: response },
        });
       
      }
      else{
        dispatch({
          type: Actions.COMMENT_RECEIVED,
          payload: { currentComment: {"blogid":"11ebe323f7f8f2a0b4e28bcd528850ed","comments":[]} },
        });
      }
      console.log("response from getBlogComments..........."+JSON.stringify(response))

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
      let response = await addBlogCommentApi(name, comment, blogid);
      
    } catch (e) {
      console.log("I am from error: ",e)
 
    }
  };
};


export const addBlogNestedComment = (name, comment, id, blogid) => {
  return async (dispatch) => {
    try {
      let response = await addBlogNestedCommentApi(name, comment, id, blogid);
      
    } catch (e) {
      console.log("I am from error: ",e)
 
    }
  };
};

