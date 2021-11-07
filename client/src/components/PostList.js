import React, { Component } from "react"
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
            return <Post title={post.title} creator={post.creator} message={post.message}
                likes={post.likes} key={post._id} id={post._id} deletePost={this.deletePost}/>
        })
    }

    deletePost(id) {
        console.log("deleting")
        //const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });
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

export default PostList