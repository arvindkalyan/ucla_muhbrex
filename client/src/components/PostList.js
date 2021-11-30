import React, { Component } from "react"
import "./postList.css"
import Post from './Post.js'
import { connect } from "react-redux"
import { setDislike } from "../actions"
import axios from 'axios'
import LIMIT from "./blacklistlimit"

class PostList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.deletePost = this.deletePost.bind(this)
        this.changeLike = this.changeLike.bind(this)
        this.changeDislike = this.changeDislike.bind(this)
        console.log(this.state.posts)
    }
    
    componentDidMount() {
        console.log("setting posts")
        axios.get('http://localhost:5000/posts')
            .then((res) => {
                this.setState({
                    posts : res.data
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            let dislikesCount = 0;
            this.state.posts.map((post) => {
                if (post.creator === this.props.userId) {
                    dislikesCount += post.usersDisliked.length;
                    //console.log(post.usersDisliked)
                }
            })
            this.props.setDislike(dislikesCount);
        }
    }


    
    renderPosts() {
        if (this.props.dislikesT < LIMIT) {
            return this.state.posts.map((post) => {
                return <Post title={post.title}
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
                    onClick={() => window.location = '/post/' + post._id}
                />
                    
            })
        } else {
            return (
                <div>
                    <h2> u r blacklisted lol</h2>
                </div>
            )
        }
    }

    deletePost(id, usersDisliked) {
        console.log("deleting")
        console.log(usersDisliked)
        this.props.setDislike(this.props.dislikesT - usersDisliked.length)
        
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
            posts : this.state.posts.filter((post) => post._id !== id)
        })
    }
    
    changeLike(id, likes, usersLiked) {
        console.log(`Changing likes on post ${id}`)
        //console.log(this.props.dislikesT)
        const userArray = {
            usersLiked: usersLiked
        }
        axios.post('http://localhost:5000/posts/changeLikes/' + id + '/' + likes, userArray)
            .then(() => {
                console.log(`like successful`)
                this.setState((prev) => {
                    console.log(prev)
                    return {
                        posts: prev.posts.map((post) => {
                            if (id === post._id) {
                                return {
                                    ...post,
                                    likes: likes
                                }
                            }
                            else {
                                return post
                            }
                        })
                   }
               })
            })
            .catch((error) => {
                console.log(error.message)
            })
        

     
    }

    changeDislike(id, dislikes, usersDisliked, creator, added) {
        //console.log(`Changing dislikes on post ${id}`)
        if (creator === this.props.userId) {
            (added) ? this.props.setDislike(this.props.dislikesT + 1) : this.props.setDislike(this.props.dislikesT - 1)
            //console.log(this.props.dislikesT)
        }
        const userArray = {
            usersDisliked: usersDisliked
        }
        axios.post('http://localhost:5000/posts/changeDislikes/' + id + '/' + dislikes, userArray)
            .then(() => {
                console.log(`dislike successful`)
                this.setState((prev) => {
                    //console.log(prev)
                    return {
                        posts: prev.posts.map((post) => {
                            if (id === post._id) {
                                return {
                                    ...post,
                                    dislikes: dislikes
                                }
                            }
                            else {
                                return post
                            }
                        })
                   }
               })
            })
            .catch((error) => {
                console.log(error.message)
            })
        

     
    }

    
    render() {
        return (
            <div className={"postList__container"}>
                {/* <div>{this.props.dislikesT}</div> */}
                <div className={"postList"}>
                {this.renderPosts()}
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

export default connect(mapStateToProps, { setDislike })(PostList)