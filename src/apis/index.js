import { getData, addData, updateData } from "./indexDb";
import { v4 as uuidv4 } from "uuid";

const baseUrl = "http://localhost:5000/";

export const addBlogApi = async (title, content) => {
  const myblogid = uuidv4();
  addData("comments", { blogid: myblogid, comments: [] });

  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();
  var date = dia + "/" + mes + "/" + year;
  const myPromise = new Promise((resolve, reject) => {
    resolve(
      addData("blogs", {
        title: title,
        blogid: myblogid,
        content: content,
        date: date,
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

export const getBlogApi = (blogid) => {
  const myPromise = new Promise((resolve, reject) => {
    resolve(getData("blogs", { blogid }));
  });

  return myPromise;
};

export const getBlogCommentsApi = async (blogid) => {

  const allBlogComments = await getData("comments", { blogid });
  return allBlogComments;
};

export const addBlogCommentApi = async (name, comment, blogid) => {
  let data = await getData("comments", { blogid });

  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();
  var date = dia + "/" + mes + "/" + year;
  const myComment = {
    text: comment,
    author: name,
    id: uuidv4(),
    created_at: date,
    children: [],
  };

  data.comments.push(myComment);
  await updateData("comments", data);
};

const replyToAComment = (comment, id, data) => {
  let currentComment = comment;

  if (currentComment.id == id) {
    currentComment.children.push(data);
    return;
  }

  if (currentComment.children && currentComment.children.length > 0) {
    for (let i = 0; i < currentComment.children.length; i++) {
      replyToAComment(currentComment.children[i], id, data);
    }
  }
};

export const addBlogNestedCommentApi = async (name, comment, id, blogid) => {
  var today = new Date();
  var year = today.getFullYear();
  var mes = today.getMonth() + 1;
  var dia = today.getDate();
  var date = dia + "/" + mes + "/" + year;
  const myComment = {
    text: comment,
    author: name,
    id: uuidv4(),
    created_at: date,
    children: [],
  };

  let data = await getData("comments", { blogid });
  data.comments.every((object) => {
    if (object.id == id) {
      object.children.push(myComment);
      return false;
    } else {
      replyToAComment(object, id, myComment);
    }
    return true;
  });

  await updateData("comments", data);
};
