import Actions from "../actionConstants/blogActionConstants";
import { getBlogListApi, getBlogApi, addBlogApi } from "../apis";

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
  console.log("called single blog")
  return async (dispatch) => {
    dispatch({ type: Actions.BLOG_REQUESTED });
    try {
      let response = await getBlogApi(blogId);
      console.log("response from one blog..........."+JSON.stringify(response))
      dispatch({
        type: Actions.BLOG_RECEIVED,
        payload: { blog: response },
      });
    } catch (e) {
      console.log("I am from error: ",e)
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


