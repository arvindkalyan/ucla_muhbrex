import React, {Component } from 'react'


class Post extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            creator: this.props.creator,
            title: this.props.title,
            message: this.props.message,
            likes : this.props.likes, 
        }
    }
    render() {
        return (
            <div>
                <p> Creator: {this.state.creator} </p>
                <p> Title: {this.state.title} </p>
                <p> Message: {this.state.message} </p>
                <p> Likes: {this.state.likes} </p> 
            </div>
        )
    }
}

export default Post