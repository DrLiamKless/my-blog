import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './comments.css'
import Comment from './Comment'
import AddComment from './AddComment'



function Comments({ comments, setComments }) {

    return (
    <div className="comments-section"> 
        <h1>Comments</h1>
        <div className="comments-container">
            {comments.map(comment => (
                <Comment
                comment={comment}
                >
                </Comment>
            ))}
        </div>
        <div className={'add-comment-section'}>
            <AddComment comments={comments} setComments={setComments}/>
        </div>
    </div>
    );
    }

export default Comments;