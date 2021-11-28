import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import "./PostCreate.css"
import axios from 'axios'

function PostCreate(props) {
    //TODO: populate this field with user from 
    //user authentication 
    const creator = props.userId
    const title = useRef()
    const message = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(title.current.value)
        console.log(message.current.value)
        
        
        const post = {
            creator: creator,
            title: title.current.value,
            message: message.current.value
        }
        console.log(post)
       
        axios.post("http://localhost:5000/posts/create", post)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error.message))
        //take person back to homepage, yay 
        window.location = '/'
    }
    
    return (
        <div className="postCreate">
            <div className="postCreate__header"><h2> Create a New Post! </h2></div> 
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
                
                <button type="submit"> Create Post </button>
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

export default connect(mapStateToProps, { signIn, signOut })(PostCreate);