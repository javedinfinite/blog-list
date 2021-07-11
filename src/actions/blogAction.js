import Actions from "../actionConstants/blogActionConstants";
import { getBlogListApi, getBlogApi } from "../apis";

export const getBlogList = (pageNumber, pageLimit, blogId='') => {
  return async (dispatch) => {
    dispatch({ type: Actions.BLOGLIST_REQUESTED });

    try {
      let response = await getBlogListApi(pageNumber, pageLimit, blogId);
      // console.log("response..........."+response.data)
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
  console.log('from getBlog')
  return async (dispatch) => {
    dispatch({ type: Actions.BLOG_REQUESTED });
    try {
      let response = await getBlogApi(blogId);
      console.log(response.data)
      dispatch({
        type: Actions.BLOG_RECEIVED,
        payload: { blog: response.data },
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

// export const uploadCsv = (formData) => {
//   return async (dispatch) => {
//     dispatch({ type: Actions.CSV_UPLOAD_REQUESTED });
//     try {
//       let response = await uploadCsvApi(formData);
//       if (response.data.success)
//         // window.location = window.location.origin + "/#/viewEmployees";
//       dispatch({
//         type: Actions.CSV_UPLOAD_RECEIVED,
//         payload: { uploadStatus: response.data },
//       });
//     } catch (e) {
//       dispatch({
//         type: Actions.CSV_UPLOAD_ERROR,
//         error: "API to upload employees is failed with error : " + e,
//       });
//     }
//   };
// };

// export const setSearchKey = (searchKey) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: 'SET_SEARCH_KEY',
//         payload: { searchKey: searchKey },
//       });
//     } catch (e) {
//        console.log('something went wrong while setting search key')
//     }
//   };
// };
