import React from 'react'
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


   
    
    render() {
        return (
            <div className="post" onClick={() => this.props.onClick()}>
                {/* please remove the creator line  */}
                <p> Creator: {this.props.creator} </p>
                <p> Title: {this.props.title} </p>
                <p> Message: {this.props.message} </p>
                <p> Likes: {this.props.likes} </p>
                <p> Dislikes: {this.props.dislikes} </p> 
                {/* <p> ID: {this.props.id} </p> */}
                <p> Timestamp: {this.props.timeStamp} </p> 
                {(this.props.userId === this.props.creator) ? <button onClick={(e) => { e.stopPropagation(); this.props.deletePost(this.props.id, this.props.usersDisliked) }}> Delete </button> : null}

                {/* the following two lines are for like/unlike button */}
               
                
                {(this.props.isSignedIn && !this.props.usersLiked.includes(this.props.userId)) ? <button onClick={(e) => { e.stopPropagation();this.props.changeLike(this.props.id, this.props.likes + 1, this.processAddUser(this.props.usersLiked))}}> Like </button> : null}
                {(this.props.isSignedIn && this.props.usersLiked.includes(this.props.userId)) ? <button onClick={(e) => { e.stopPropagation();this.props.changeLike(this.props.id, this.props.likes - 1, this.processRemoveUser(this.props.usersLiked)) }}> Unlike </button> : null}
                
                {/* the following two lines are for dislike/remove dislike button */}
                {(this.props.isSignedIn && !this.props.usersDisliked.includes(this.props.userId)) ? <button onClick={(e) => { e.stopPropagation();this.props.changeDislike(this.props.id, this.props.dislikes + 1, this.processAddUser(this.props.usersDisliked), this.props.creator, true)}}> Dislike </button> : null}
                {(this.props.isSignedIn && this.props.usersDisliked.includes(this.props.userId)) ? <button onClick={(e) => {e.stopPropagation(); this.props.changeDislike(this.props.id, this.props.dislikes - 1, this.processRemoveUser(this.props.usersDisliked), this.props.creator, false) }}> Remove Dislike </button> : null}
                

               
                {(this.props.userId === this.props.creator && this.props.dislikesT < 5) ? <button onClick={(e) => {
                    e.stopPropagation();
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
        userId: state.auth.userId,
        dislikesT: state.likes.dislikes
    }
}

export default connect(mapStateToProps)(Post)