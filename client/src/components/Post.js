import React from 'react'
import { connect } from 'react-redux'
import AddIcon from "@material-ui/icons/Add"
import { IconButton } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRounded from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbDownAltRounded from '@material-ui/icons/ThumbDownAltRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded'

import EditOutlined from '@material-ui/icons/EditOutlined'

import LIMIT from './blacklistlimit'
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
                {/* <p> Creator: {this.props.creator} </p> */}
                <p> <span style={{fontWeight:'500'}}> Title: </span> {this.props.title} </p>
                <p> <span style={{fontWeight:'500'}}> Message: </span> {this.props.message} </p>
                {/*<p> Likes: {this.props.likes} </p> */}
                {/*<p> Dislikes: {this.props.dislikes} </p> */}
                {/* <p> ID: {this.props.id} </p> */}
                <p> <span style={{fontWeight:'500'}}> Timestamp: </span> {this.props.timeStamp} </p> 
                

                {/* the following two lines are for like/unlike button */}
               <div onClick={(e) => {e.stopPropagation()}}>
                    {(this.props.isSignedIn && !this.props.usersLiked.includes(this.props.userId)) ? <IconButton onClick={(e) => { e.stopPropagation(); this.props.changeLike(this.props.id, this.props.likes + 1, this.processAddUser(this.props.usersLiked)) }}> <ThumbUpAltOutlinedIcon /> </IconButton> : null}
                    {(!this.props.isSignedIn ? <IconButton> <ThumbUpAltOutlinedIcon /> </IconButton>  : null)}
                    {(this.props.isSignedIn && this.props.usersLiked.includes(this.props.userId)) ? <IconButton onClick={(e) => { e.stopPropagation();this.props.changeLike(this.props.id, this.props.likes - 1, this.processRemoveUser(this.props.usersLiked)) }}> <ThumbUpAltRounded /> </IconButton> : null}
                    {/* {this.props.isSignedIn && this.props.likes} */}
                    { this.props.likes}
                    
                
                    {/* the following two lines are for dislike/remove dislike button */}
                    {(this.props.isSignedIn && !this.props.usersDisliked.includes(this.props.userId)) ? <IconButton onClick={(e) => { e.stopPropagation(); this.props.changeDislike(this.props.id, this.props.dislikes + 1, this.processAddUser(this.props.usersDisliked)) }}> <ThumbDownAltOutlinedIcon /> </IconButton> : null}
                    {(!this.props.isSignedIn ? <IconButton> <ThumbDownAltOutlinedIcon /> </IconButton>  : null)}
                    {(this.props.isSignedIn && this.props.usersDisliked.includes(this.props.userId)) ? <IconButton onClick={(e) => {e.stopPropagation(); this.props.changeDislike(this.props.id, this.props.dislikes - 1, this.processRemoveUser(this.props.usersDisliked)) }}> <ThumbDownAltRounded /> </IconButton> : null}
                    {this.props.dislikes}
                    
                
                    {(this.props.userId === this.props.creator && this.props.dislikesT < LIMIT) ? <IconButton onClick={(e) => {
                        e.stopPropagation();
                        window.location = '/edit/' + this.props.id
                        //console.log(this.props.id)
                    }}> <EditOutlined/> </IconButton> : null}
                    {(this.props.userId === this.props.creator) ? <IconButton color="secondary" onClick={(e) => { e.stopPropagation(); this.props.deletePost(this.props.id, this.props.usersDisliked) }}> <DeleteOutlineRoundedIcon/> </IconButton> : null}
                </div>
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