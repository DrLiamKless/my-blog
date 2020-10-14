import React, { useEffect, useRef, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function AddComment({ comments, setComments }) {

    const commentWriterName = useRef()
    const commentContent = useRef()
    const submitCommentBtn = useRef()

    const onSubmit = (e) => {
        const date = new Date
        const comment = {
            name: commentWriterName.current.value,
            content: commentContent.current.value,
            timeStamp: `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
        }
        const commentsToUpdate = comments.slice()
        commentsToUpdate.push(comment);
        setComments(commentsToUpdate)
    }

    const handleEnterClick = (e, field) => {
        if(e.keyCode === 13) {
            switch(field){
              case 'name':
                commentContent.current.focus();
                break;
              case 'content':
                submitCommentBtn.current.click()
                break;
              default:
                console.log('Not found');
                break;
            }
        } 
    }

    return (
    <div className="add-comment" style={{margin: '10px'}}>
        <h1>Add New Comment</h1>
        <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Small"
            ref={commentWriterName}
            onKeyUp={(e) => handleEnterClick(e, "name")}/>
        </InputGroup>
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>Content</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            as="textarea"
            aria-label="With textarea"
            ref={commentContent}
            onKeyUp={(e) => handleEnterClick(e, "content")}/>
        </InputGroup>
        <Button
        ref={submitCommentBtn}
        variant="outline-primary"
        style={{margin: '10px'}}
        onClick={onSubmit}>Submit</Button>
    </div>
    );
    }

export default AddComment;
