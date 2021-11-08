<<<<<<< HEAD
import React from "react"
//import PostForm from "./PostForm.js"
=======
import React, { Component } from "react"
>>>>>>> 79b0495e58b5c058dfdfcd3e05eb02f7798987c7
import "./postList.css"
import Post from './Post.js'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PostList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.deletePost = this.deletePost.bind(this)
        this.addLike = this.addLike.bind(this)
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
                addLike={this.addLike} />
                
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

    addLike(id, likes) {
        console.log(`Liking post ${id}`)

        axios.post('http://localhost:5000/posts/addlikes/' + id + '/' + likes)
            .then(() => {
                console.log(`like successful`)
            }).catch((error) => {
                console.log(error.message)
            })
        
        //TODO: this isn't ideal, but I can't think of how 
        //else to get the like count to go up without 
        //user having to physically refresh 
        window.location = '/'
    }
    
    render() {
        return (
            <div className={"container"}>
                <div className={"postList"}>
<<<<<<< HEAD
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
=======
                {this.renderPosts()}
>>>>>>> 79b0495e58b5c058dfdfcd3e05eb02f7798987c7
                </div>
            </div>
        )
    }
}

export default PostList