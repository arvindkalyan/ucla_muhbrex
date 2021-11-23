import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import axios from 'axios';

function UserLanding(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("setting user posts")
        axios.get('http://localhost:5000/posts')
            .then((res) => {
                setPosts(res.data)
            }).catch((error) => {
                console.log(error.message)
            })
    }, []);

    return posts.map((post) => {
        if (props.userId === post.creator) {
            return  (
                <Post 
                    title={post.title}
                    creator={post.creator}
                    message={post.message}
                    likes={post.likes}
                    timeStamp={post.timeStamp}
                    key={post._id}
                    id={post._id}
                    deletePost={this.deletePost}
                    addLike={this.addLike} 
                />
            )
        } else {
            return null
        }
    })
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(UserLanding);