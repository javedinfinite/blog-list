import axios from "axios";

// const baseUrl = "https://safe-csv-uploader.herokuapp.com/";
const baseUrl = "http://localhost:5000/";


//temporary data for API

 var blogListResponse = {
  "data":  [1, 2, 3, 4, 5, 6, 7, 8, 9]
}



export const getBlogListApi = (pageNumber, pageLimit, blogId) => {
  return blogListResponse
  // return axios.get(
  //   baseUrl +
  //     "api/blogs?pageNumber=" +
  //     pageNumber +
  //     "&pageLimit=" +
  //     pageLimit + 
  //     "&employeeName=" + 
  //     blogId
  // );
};

export const getBlogApi = (blogId) => {
  return   {
    "data":  blogId
  } 
  // return axios.get(
  //   baseUrl +
  //     "api/blogs?blogid=" + blogId
  // );
};

// export const uploadBlogApi = (formData) => {
//   return axios.post(baseUrl + "api/blogs", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
