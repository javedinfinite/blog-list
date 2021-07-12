import React from 'react';
import Comment from './comment';

const Comments = (props) => {
    return (
        <div>
            {  props.data.map((comment)=>{
                    return  <Comment key={comment.id} t={comment.id} comment={comment} />
                })
            }
        </div>
 
    )
}

export default Comments;