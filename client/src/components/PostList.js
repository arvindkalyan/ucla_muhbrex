import React, { Component } from "react"
import { connect } from 'react-redux'

//import PostForm from "./PostForm.js"
import "./postList.css"
import Post from './Post.js'

 class PostList extends Component{
    render() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.title}>
                    <div>
                        <button>
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {post.title}
                    </div>
                </div>
            )
        }
            
           
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(PostList)