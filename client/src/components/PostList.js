import React, { Component } from "react"
import "./postList.css"
import Post from './Post.js'

 class PostList extends Component{
    render() {
        return (
            <div className={"container"}>
            <div className={"postList"}>
            <Post />
            <Post />
            <Post />
                </div>
                </div>
        )
    }
}

export default PostList