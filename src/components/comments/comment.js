import React from 'react';
import Comments from '.';

const Comment = (props) => {
    return (
        <div style={{paddingLeft:'30px'}}>
            
            {/* {JSON.stringify(props.t)} */}
            <p >{props.comment.author} says {props.comment.comment_text} </p>
            <Comments data={props.comment.children} />
        </div>
    );
};

export default Comment;