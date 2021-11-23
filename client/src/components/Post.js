import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Post.css'


class Post extends React.Component{
<<<<<<< HEAD
    // constructor(props) {
    //     super(props)
        
        
    // }
=======
    constructor(props) {
        super(props)
    }
>>>>>>> sa_editing_post
    
    render() {
        return (
            <div>
                <p> Creator: {this.props.creator} </p>
                <p> Title: {this.props.title} </p>
                <p> Message: {this.props.message} </p>
                <p> Likes: {this.props.likes} </p>
                {/* <p> ID: {this.props.id} </p> */}
                <p> Timestamp: {this.props.timeStamp} </p> 
                {(this.props.userId === this.props.creator) ? <button onClick={() => { this.props.deletePost(this.props.id) }}> Delete </button> : null}
                <button onClick={() => { this.props.addLike(this.props.id, this.props.likes)}}> Like </button>
                <button onClick={() => {
                    window.location = '/edit/' + this.props.id
                    //console.log(this.props.id)
                }}> Edit </button>
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

export default connect(mapStateToProps)(Post)