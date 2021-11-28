import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import { useParams } from 'react-router-dom';
import './PostEdit.css'
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
        <div className='postEdit'>
            <div className="postEdit__header"><h2> PostEdit </h2> </div>
            <div className="postEdit__form"><form onSubmit={handleSubmit}>
                <div><label>
                    <p>New Title: </p>
                    <input
                        ref={newTitle}
                        name="title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    /> 
                </label></div>
                
                <div><label>
                    <p>New Message: </p>
                    <textarea
                        ref={newMessage}
                        name="message"
                        value={message}
                        onChange={(event) => {
                            setMessage(event.target.value)
                        }}
                    /> 
                </label></div>
                
                <button type="submit"> Submit Changes </button> 
            </form></div>
        
        </div>
    )

   
    
}

export default PostEdit;