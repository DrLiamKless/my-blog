import React from 'react';
import './App.css';
import Post from './components/Post'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Post/>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
