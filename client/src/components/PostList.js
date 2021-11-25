import React, { Component } from "react"
import "./postList.css"
import Post from './Post.js'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import axios from 'axios'

class PostList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.deletePost = this.deletePost.bind(this)
        this.addLike = this.addLike.bind(this)
        this.decrementLike = this.decrementLike.bind(this)
        console.log(this.state.posts)
    }
    
    componentDidMount() {
        console.log("setting posts")
        axios.get('http://localhost:5000/posts')
            .then((res) => {
                this.setState({
                    posts : res.data
                })
               
            }).catch((error) => {
                console.log(error.message)
            })
    }

    
    renderPosts() {
        return this.state.posts.map((post) => {
            return <Post title={post.title}
                creator={post.creator}
                message={post.message}
                likes={post.likes}
                timeStamp={post.timeStamp}
                key={post._id}
                id={post._id}
                deletePost={this.deletePost}
                addLike={this.addLike}
                decrementLike={this.decrementLike}
                usersLiked={post.usersLiked}    
            />
                
        })
    }

    deletePost(id) {
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
    
    addLike(id, likes, usersLiked) {
        console.log(`Liking post ${id}`)
        //let self = this
        const userArray = {
            usersLiked: usersLiked
        }
        axios.post('http://localhost:5000/posts/addlikes/' + id + '/' + likes, userArray)
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


    decrementLike(id, likes, usersLiked) {
        console.log(`Taking away like from post ${id}`)
        //let self = this
        const userArray = {
            usersLiked: usersLiked
        }
        axios.post('http://localhost:5000/posts/decrementLikes/' + id + '/' + likes, userArray)
            .then(() => {
                console.log(`taking away like successful`)
                this.setState((prev) => {
                    console.log(prev)
                    return {
                        posts: prev.posts.map((post) => {
                            if (id === post._id) {
                                return {
                                    ...post,
                                    likes: Number(post.likes) - 1
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
    
    render() {
        return (
            <div className={"container"}>
                <div className={"postList"}>
                {this.renderPosts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(PostList)