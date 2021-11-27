import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import Post from './Post';



class ExpandedPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
        
        this.deletePost = this.deletePost.bind(this)
        this.changeLike = this.changeLike.bind(this)
        this.changeDislike = this.changeDislike.bind(this)
        this.renderPost = this.renderPost.bind(this)
    }

    componentDidMount() {
        let id = window.location.pathname.slice(6)
        console.log(id)
        console.log('http://localhost:5000/posts/get/' + id)
        console.log("setting posts")
        axios.get('http://localhost:5000/posts/get/' + id)
            .then((res) => {
                this.setState({
                    post : res.data
                })
               
            }).catch((error) => {
                console.log(error.message)
            })
    }

    deletePost(id) {
        console.log("deleting")
        
        //for some reason this shit did not work 
        //const url = 'http://localhost:5000/posts/delete/' + id
        //console.log(url)
        
        axios.delete('http://localhost:5000/posts/delete/' + id)
            .then(() => {
                console.log(`deleted ${id}`)
            }).catch((error) => {
                console.log(error.message)
            })
        this.setState({
            post: null
        })
        window.location = '/'
    }
    
    changeLike(id, likes, usersLiked) {
        console.log(`Changing likes on post ${id}`)
        //let self = this
        const userArray = {
            usersLiked: usersLiked
        }
        axios.post('http://localhost:5000/posts/changeLikes/' + id + '/' + likes, userArray)
            .then(() => {
                console.log(`like successful`)
                this.setState({
                    post: {...this.state.post, likes: likes}
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
        

     
    }
    
    changeDislike(id, dislikes, usersDisliked) {
        console.log(`Changing dislikes on post ${id}`)
        const userArray = {
            usersDisliked: usersDisliked
        }
        axios.post('http://localhost:5000/posts/changeDislikes/' + id + '/' + dislikes, userArray)
            .then(() => {
                console.log(`dislike successful`)
                this.setState({
                    post: {...this.state.post, dislikes: dislikes}
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
        

     
    }


    renderPost() {
        const post = this.state.post
        if (post !== null) {
             return <Post title = {post.title}
                        creator={post.creator}
                        message={post.message}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        timeStamp={post.timeStamp}
                        key={post._id}
                        id={post._id}
                        deletePost={this.deletePost}
                        changeLike={this.changeLike}
                        changeDislike={this.changeDislike}
                        usersLiked={post.usersLiked}
                        usersDisliked={post.usersDisliked}
                        onClick={() => {}}
                    />
        }
        return <div>  </div>
       
    }

    render() {
        return (
            <div className="container">
                <div className="ExpandedPost">
                   {this.renderPost()}
                </div>
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
export default connect(mapStateToProps)(ExpandedPost);