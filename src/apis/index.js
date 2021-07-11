import axios from "axios";

import { getData, addData } from "./indexDb";

// const baseUrl = "https://safe-csv-uploader.herokuapp.com/";
const baseUrl = "http://localhost:5000/";

export const addBlogApi = async (title, content) => {
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth()+1;
  var dia = today.getDate();
  var date =dia+"/"+mes+"/"+year;
  const myPromise = new Promise((resolve, reject) => {
    resolve(
      addData("blogs", {
        title: title,
        blogid: 8,
        content: content,
        date: date
        ,
      })
    );
  });
  return myPromise;
};

export const getBlogListApi = async (pageNumber, pageLimit, blogId) => {
  const myPromise = new Promise((resolve, reject) => {
    resolve(getData("blogs"));
  });

  return myPromise;
};

export const getBlogApi = (blogId) => {
  const myPromise = new Promise((resolve, reject) => {
    resolve(getData("blogs", blogId));
  });

  return myPromise;
};
