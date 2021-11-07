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
            visible: true
        }
    }
    // deletePost() {
    //     console.log("deleting")
    //     const id = this.state.id
    //     const url = 'http://localhost:5000/posts/delete/' + id
    //     console.log(url)
    //     /*
    //     axios.delete({url})
    //         .then(() => {
    //             console.log(`deleted ${id}`)
    //             this.setState({
    //                 visible: false
    //             })
    //         }).catch((error) => {
    //             console.log(error.message)
    //         }) */
    // }
    render() {
        return (this.state.visible && 
            <div>
                <p> Creator: {this.state.creator} </p>
                <p> Title: {this.state.title} </p>
                <p> Message: {this.state.message} </p>
                <p> Likes: {this.state.likes} </p>
                <p> ID: {this.state.id} </p>
                <button onClick={() => {this.props.deletePost(this.props.id)}}> Delete </button>  
            </div>
        )
    }
}

export default Post