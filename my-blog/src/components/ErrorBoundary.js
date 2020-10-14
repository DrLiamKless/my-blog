import React from 'react';
import { LostPage } from '404-page'
import '404-page/dist/index.css'
import face from '../face.png'


class ErrorBoundary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError(error){
    return {isError: true};
  }

  render(){
    return (
     <div>
      {this.state.isError ?
      <LostPage face={face}/>
      :
      this.props.children
    }
    </div>
    )
  }
}

export default ErrorBoundary;