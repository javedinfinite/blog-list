import React from 'react';
import Comments from '.';
import Replycard from './Replycard'

const Comment = (props) => {
    return (
        <div style={{marginLeft:'5%' }}>            
            <Replycard author={props.comment.author} comment={props.comment.comment_text}/>
            <Comments data={props.comment.children} />
        </div>
    );
};

export default Comment;