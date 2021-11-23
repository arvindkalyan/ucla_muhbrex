import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Post from './Post';
import axios from 'axios';
import './postList.css'

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

    const deletePost = (id) => {
        console.log("deleting")
        
        //for some reason this shit did not work 
        //const url = 'http://localhost:5000/posts/delete/' + id
        //console.log(url)
        
        axios.delete('http://localhost:5000/posts/delete/' + id)
            .then(() => {
                console.log(`deleted ${id}`)
            }).catch((error) => {
                console.log(error.message)
            })
        this.setState({
            posts : this.state.posts.filter((post) => post._id !== id)
        })
    }
    
    const addLike = (id, likes) => {
        console.log(`Liking post ${id}`)
        //let self = this
        axios.post('http://localhost:5000/posts/addlikes/' + id + '/' + likes)
            .then(() => {
                console.log(`like successful`)
                this.setState((prev) => {
                    console.log(prev)
                    return {
                        posts: prev.posts.map((post) => {
                            if (id === post._id) {
                                return {
                                    ...post,
                                    likes: Number(post.likes) + 1
                                }
                            }
                            else {
                                return post
                            }
                        })
                   }
               })
            })
            .catch((error) => {
                console.log(error.message)
            })
        }
     

    const renderPosts = () => {
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
                        deletePost={deletePost}
                        addLike={addLike} 
                    />
                )
            } 
        })
    }

    return (
        <div className="container">
            <div className="UserLanding">
                {renderPosts()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(UserLanding);