import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function Comment({ comment }) {

    return (
        <Card bg='light' text="dark" border="dark" style={{ width: '100%', height: '10rem'}}>
            <Card.Header>{comment.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {comment.content}
                </p>
                <footer className="blockquote-footer">
                    <cite title="Source Title">{comment.timeStamp}</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
    }

export default Comment;
