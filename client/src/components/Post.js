import axios from 'axios'
import React, {Component } from 'react'


class Post extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            creator: this.props.creator,
            title: this.props.title,
            message: this.props.message,
            likes: this.props.likes,
            id: this.props.id,
            timeStamp: this.props.timeStamp, 
        }
        
    }
    
    render() {
        return (
            <div>
                <p> Creator: {this.state.creator} </p>
                <p> Title: {this.state.title} </p>
                <p> Message: {this.state.message} </p>
                <p> Likes: {this.state.likes} </p>
                {/* <p> ID: {this.state.id} </p> */}
                <p> Timestamp: {this.state.timeStamp} </p> 
                <button onClick={() => { this.props.deletePost(this.props.id) }}> Delete </button>
                <button onClick={() => { this.props.addLike(this.props.id, this.props.likes)}}> Like </button>
            </div>
        )
    }
}

export default Post