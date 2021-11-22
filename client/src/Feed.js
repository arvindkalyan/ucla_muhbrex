import React from 'react';
import PostList from './components/PostList.js'
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>FEED</h2>
            </div>
            <PostList />
           
        </div>
    )
}

export default Feed