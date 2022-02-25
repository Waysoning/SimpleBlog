import React from 'react';
import PostCreate from './PostCreate'

const App = () => {
    // do not forget the ()
    // spell correctly
    return (
        <div className='container'>
            <h1>Create Post</h1>
            <PostCreate />
        </div>
    );
}

export default App;