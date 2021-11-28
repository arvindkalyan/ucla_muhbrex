import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

//import { signIn, signOut } from './actions/index.js'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import Sidebar from './components/Sidebar.js'
import Feed from './components/Feed.js'
import "./App.css"
import GoogleAuth from './components/GoogleAuth.js'
//import PostCreateButton from './components/PostCreateButton.js'
import UserLanding from './components/UserLanding.js'
import ExpandedPost from './components/ExpandedPost.js'
import Post from './components/Post.js'

class App extends React.Component {
  render() {
    return (
      <div className="app">

        <Router>
          {/* TODO: Make the following set of stuff 
                before the Routes block into an actual nice navbar */}
          {/*<PostCreateButton />*/}
          <Sidebar />
          
          <Routes>
            <Route path="/" exact element={<Feed />} /> 
            <Route path="/create" element={<PostCreate />} />
            <Route path="/edit/:id" element={<PostEdit />} />
            <Route path="/user/:id" element={<UserLanding />} />
            <Route path="/post/:id" element={<ExpandedPost />} />

            
          </Routes>
          
        </Router>


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

export default connect(mapStateToProps)(App)