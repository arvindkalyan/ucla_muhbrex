import React, {
    useEffect,
    useState,
    useRef
} from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Post from './Post';
import PostList from './PostList';
import { withRouter, useLocation } from "react-router";


class ExpandedPost extends React.Component {
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
        let id = window.location.pathname.slice(6)
        console.log(id)
        console.log('http://localhost:5000/posts/get/' + id)
        console.log("setting posts")
        //console.log("CONSTRUCTOR CALL")
        axios.get('http://localhost:5000/posts/get/' + id)
            .then((res) => {
                this.setState({
                    posts: res.data
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
            posts: this.state.posts.filter((post) => post._id !== id)
        })
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

    changeDislike(id, dislikes, usersDisliked) {
        console.log(`Changing dislikes on post ${id}`)
        const userArray = {
            usersDisliked: usersDisliked
        }
        axios.post('http://localhost:5000/posts/changeDislikes/' + id + '/' + dislikes, userArray)
            .then(() => {
                console.log(`dislike successful`)
                this.setState((prev) => {
                    console.log(prev)
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


    renderPosts() {
        console.log(this.props)
        console.log(this.state.posts)
        return (
            <Post
                creator={this.state.posts.creator}
                message={this.state.posts.message}
                likes={this.state.posts.likes}
                dislikes={this.state.posts.dislikes}
                timeStamp={this.state.posts.timeStamp}
                key={this.state.posts._id}
                id={this.state.posts._id}
                deletePost={this.deletePost}
                changeLike={this.changeLike}
                changeDislike={this.changeDislike}
                usersLiked={this.state.posts.usersLiked}
                usersDisliked={this.state.posts.usersDisliked}
            />
        )
    }

    render() {
        return (
            <div className="container">
                <div className="ExpandedPost">
                    {this.renderPosts()}
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