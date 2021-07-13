import React from "react";
import Comment from "./comment";

const Comments = (props) => {
  return (
    <div>
      {props.data.map((comment, key) => {
        return (
          <Comment
            callme={props.callme}
            key={comment.id}
            commentId={comment.id}
            comment={comment}
          />
        );
      })}
    </div>
  );
};

export default Comments;
