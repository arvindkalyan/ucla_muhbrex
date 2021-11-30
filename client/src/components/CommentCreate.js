import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import "./PostCreate.css"
import axios from 'axios'


function CommentCreate(props) {
    //TODO: populate this field with user from 
    //user authentication 
    const creator = props.userId
    const title = useRef()
    const message = useRef()
    const parent = props.id

    const [post, setPost] = useState(0);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(title.current.value)
        console.log(message.current.value)
        
        const post = {
            creator: creator,
            title: title.current.value,
            message: message.current.value, 
            parent: parent
        }
        
        axios.post("http://localhost:5000/posts/create", post)
            .then((res) => setPost(res.data))
            .catch((error) => console.log(error.message))
        //take person back to homepage, yay 
        

        console.log("CHANGE COMMENT")
        console.log(props.changeComment)
        props.changeComment(props.id, props.comments+1)

        window.location = '/post/'+parent
    }
    
    return (
        <div className="postCreate" onClick={(e)=>{e.stopPropagation()}}>
            <div className="postCreate__header"><h2> Create a Comment! </h2></div> 
            <div className="postCreate__form"><form onSubmit={handleSubmit}>
                
                <div><label>
                    <input
                        ref={title}
                        name="title"
                        placeholder="Your Titillating Title"
                    /> 
                </label> </div>
                
                <div><label>
                    <textarea
                        ref={message}
                        name="message"
                        placeholder="Your Moving Message"
                    /> 
                </label></div>
                
                <button type="submit"> Create Comment </button>
            </form> </div>
                
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { signIn, signOut })(CommentCreate);