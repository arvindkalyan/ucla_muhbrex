import React, { Component } from "react"
//import PostForm from "./PostForm.js"
import "./postList.css"
import Post from './Post.js'
export default class PostList extends React.Component{
    render() {
        return (
            <div className={"container"}>
                <div className={"postList"}>
                    <Post/>
                    <Post />
                    <Post/>
                    <Post />
                    <Post/>
                    <Post/> <Post/>
                    <Post />
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post />
                    <Post/>
                    <Post />
                    <Post/>
                    <Post />
                    <Post/>
                    <Post/>
                </div>
            </div>
           
        )
    }
}