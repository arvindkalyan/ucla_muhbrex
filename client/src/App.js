import React from 'react'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import "./App.css"
class App extends React.Component {
  render() {
    return (
      <div className="app">

        <Router>
          {/* TODO: Make the following set of stuff 
                before the Routes block into an actual nice navbar */}
          <Sidebar />

          {/* <Feed /> */}

          
          <Routes>
            {/* <Route path="/" /> */}
            <Route path="/" exact element={<Feed />} /> 
            <Route path="/create" element={<PostCreate />} />
            <Route path="/edit/:id" element={<PostEdit />} />

            {/* TODO: how should we arrange routing for liking a post? */}
          </Routes>
          {/* TODO: Add routes for editing a post and liking it */}
        </Router>


      </div>
    )
  }
}

export default App