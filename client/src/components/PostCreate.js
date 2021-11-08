import React, { useRef } from 'react';
import axios from 'axios'

function PostCreate() {
    //TODO: populate this field with user from 
    //user authentication 
    const creator = "sophia"
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
        //take person back to homepage 
        window.location = '/'
    }
    
    return (
        <div>
            <h1> PostCreate </h1> 
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        ref={title}
                        name="title"
                        placeholder="Your Titillating Title"
                    /> 
                </label>
                
                <label>
                    <input
                        ref={message}
                        name="message"
                        placeholder="Your Moving Message"
                    /> 
                </label>
                
            <button type="submit"> Create Post </button> 
            </form>
                
        </div>
    )
    
}

export default PostCreate;