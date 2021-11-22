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
          
          <Sidebar />
          
          <Routes>
            <Route path="/" exact element={<Feed />} /> 
            <Route path="/create" element={<PostCreate />} />
            <Route path="/edit/:id" element={<PostEdit />} />

            
          </Routes>
          
        </Router>


      </div>
    )
  }
}

export default App