import React from 'react';
import Comments from '.';
import Replycard from './Replycard'

const Comment = (props) => {
    return (
        <div style={{marginLeft:'5%' }}>            
            <Replycard callme={props.callme} commentId={props.commentId} author={props.comment.author}   comment={props.comment.text}/>
            <Comments callme={props.callme} data={props.comment.children}   />
        </div>
    );
};

export default Comment;