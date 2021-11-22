import axios from 'axios'
import React, {Component } from 'react'
import './Post.css'


class Post extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <p> Creator: {this.props.creator} </p>
                <p> Title: {this.props.title} </p>
                <p> Message: {this.props.message} </p>
                <p> Likes: {this.props.likes} </p>
                {/* <p> ID: {this.props.id} </p> */}
                <p> Timestamp: {this.props.timeStamp} </p> 
                <button onClick={() => { this.props.deletePost(this.props.id) }}> Delete </button>
                <button onClick={() => { this.props.addLike(this.props.id, this.props.likes)}}> Like </button>
                <button onClick={() => {
                    window.location = '/edit/' + this.props.id
                    //console.log(this.props.id)
                }}> Edit </button>
            </div>
        )
    }
}

export default Post