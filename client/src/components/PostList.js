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

    componentDidUpdate() {
        console.log("useEffect run")
        console.log(this.state.posts)
    }

    renderPosts() {
        return this.state.posts.map((post) => {
            return <Post title={post.title} creator={post.creator} message={post.message}
                    likes={post.likes}/>
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