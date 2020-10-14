import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './comments.css'
import Comment from './Comment'
import AddComment from './AddComment'
var fs = require('fs');




function Comments({ comments }) {

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
    </div>
    );
    }

export default Comments;