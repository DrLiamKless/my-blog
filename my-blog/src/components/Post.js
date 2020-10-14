import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddComment from './AddComment'
// import Comments from './Comments'
const Comments = lazy(() => import('./Comments'))



function Post() {

    const [comments, setComments] = useState([{name:"Liam", content:"Great article thank you Dan Abramov", timeStamp:"2020/10/14 11:45"}]);

    return (
    <div className="post" style={{margin: '10px'}}> 
        <Card text='dark' style={{ width: '70rem', height: '100%', padding: '40px' }}>
            <Card.Body>
            <div className="post-title">
                <Card.Title>{<h1>Why do you use 'super (props)'?</h1>}</Card.Title>
            </div>
                <Card.Subtitle className="mb-2 text-muted">Dan Abramov</Card.Subtitle>
            <div className="post-content" style={{margin: '100px'}}>
                <Card.Text>
                    syntax like this was planned when React 0.13 added support for plain classes in 2015. Defining constructor and calling super(props) was always intended to be a temporary solution until class fields provide an ergonomic alternative.
                    In JavaScript, super refers to the parent class constructor. (In our example, it points to the React.Component implementation.)
                    Importantly, you can’t use this in a constructor until after you’ve called the parent constructor. JavaScript won’t let you:
                </Card.Text>
            </div>
            </Card.Body>
            <Suspense fallback={<h1>"Loading comments..."</h1>}>
                <Comments comments={comments}/>
            </Suspense>
        </Card>
        <AddComment comments={comments} setComments={setComments}/>
    </div>
    );
    }

export default Post;