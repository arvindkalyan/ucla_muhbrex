import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios'


const PostEdit = () => {
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [message, setMessage] = useState()
    const newTitle = useRef()
    const newMessage = useRef()
    

    //this is in effect the same as ComponentDidMount 
    useEffect(() => {
        axios.get('http://localhost:5000/posts/get/' + id)
            .then((res) => {
                setTitle(res.data.title)
                setMessage(res.data.message)
            }).catch((error) => {
                console.log(error.message)
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        
        
        const newPostFields = {
            title: newTitle.current.value,
            message: newMessage.current.value
        }
       
       
        axios.post("http://localhost:5000/posts/update/" + id, newPostFields)
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error.message))
        //take person back to homepage 
        window.location = '/post/'+id
    }

    return (
        <div>
            <h1> PostEdit </h1> 
            <form onSubmit={handleSubmit}>
                <label>
                    New Title: 
                    <input
                        ref={newTitle}
                        name="title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    /> 
                </label>
                
                <label>
                    New Message: 
                    <input
                        ref={newMessage}
                        name="message"
                        value={message}
                        onChange={(event) => {
                            setMessage(event.target.value)
                        }}
                    /> 
                </label>
                
            <button type="submit"> Submit Changes </button> 
            </form>
        
        </div>
    )

   
    
}

export default PostEdit;