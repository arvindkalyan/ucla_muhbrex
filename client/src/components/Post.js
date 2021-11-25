import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Post.css'


class Post extends React.Component{
    constructor(props) {
        super(props)

        this.processAddUser = this.processAddUser.bind(this)
        this.processRemoveUser = this.processRemoveUser.bind(this)
        
    }

    processAddUser(userArray) {
        userArray.push(this.props.userId);
        return userArray;
    }

    processRemoveUser(userArray) {
        userArray.pop(this.props.userId)
        return userArray
    }


    ay
    // }
    
    render() {
        return (
            <div>
                <p> Creator: {this.props.creator} </p>
                <p> Title: {this.props.title} </p>
                <p> Message: {this.props.message} </p>
                <p> Likes: {this.props.likes} </p>
                <p> Dislikes: {this.props.dislikes} </p> 
                {/* <p> ID: {this.props.id} </p> */}
                <p> Timestamp: {this.props.timeStamp} </p> 
                {(this.props.userId === this.props.creator) ? <button onClick={() => { this.props.deletePost(this.props.id) }}> Delete </button> : null}

                {(this.props.isSignedIn && !this.props.usersLiked.includes(this.props.userId)) ? <button onClick={() => { this.props.addLike(this.props.id, this.props.likes, this.processAddUser(this.props.usersLiked))}}> Like </button> : null}
                {(this.props.isSignedIn && this.props.usersLiked.includes(this.props.userId)) ? <button onClick={() => { this.props.decrementLike(this.props.id, this.props.likes, this.processRemoveUser(this.props.usersLiked)) }}> Unlike </button> : null}
                
                {(this.props.isSignedIn && !this.props.usersDisliked.includes(this.props.userId)) ? <button onClick={() => { this.props.addDislike(this.props.id, this.props.dislikes, this.processAddUser(this.props.usersDisliked))}}> Dislike </button> : null}
                {(this.props.isSignedIn && this.props.usersDisliked.includes(this.props.userId)) ? <button onClick={() => { this.props.decrementDislike(this.props.id, this.props.dislikes, this.processRemoveUser(this.props.usersDisliked)) }}> Remove Dislike </button> : null}
                

               
                {(this.props.userId === this.props.creator) ? <button onClick={() => {
                    window.location = '/edit/' + this.props.id
                    //console.log(this.props.id)
                }}> Edit </button> : null}
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