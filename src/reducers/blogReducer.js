import Actions from "../actionConstants/blogActionConstants";

const initialState = {
  blogList: [],
  selectedBlog: {
    title: "This is dummy default",
    blogid: 8,
    content: "You got this content because you reloaded the browser",
    date: "12/7/2021",
  },
  totalPages: 0,
  totalBlogCount: 0,
  currentPage: 0,
  limit: 5,
  error: "",
  searchKey: "",
  currentComment: { blogid: "11ebe323f7f8f2a0b4e28bcd528850ed", comments: [] },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.BLOGLIST_REQUESTED:
      return {
        ...state,
        error: "",
        blogList: [],
        isLoading: true,
      };
    case Actions.BLOGLIST_RECEIVED:
      return {
        ...state,
        error: "",
        blogList: action.payload.blogList || [],
        selectedBlog: action.payload.blogList[0] || {},
      };
    case Actions.BLOGLIST_ERROR:
      return {
        ...state,
        error: action.error || "Something went wrong while fetching blog list",
        isLoading: false,
      };
    case Actions.BLOG_REQUESTED:
      return {
        ...state,
        error: action.error || "",
      };
    case Actions.BLOG_RECEIVED:
      return {
        ...state,
        selectedBlog: action.payload.blog,
        error: "",
      };
    case Actions.BLOG_ERROR:
      return {
        ...state,
        error: action.error || "Something went wrong while fetching the blog",
      };

    case Actions.COMMENT_REQUESTED:
      return {
        ...state,
        error: action.error || "",
      };
    case Actions.COMMENT_RECEIVED:
      return {
        ...state,
        currentComment: action.payload.currentComment,
        error: "",
      };
    case Actions.COMMENT_ERROR:
      return {
        ...state,
        error:
          action.error || "Something went wrong while fetching the comment",
      };

    default:
      return state;
  }
};
