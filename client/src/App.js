import React from 'react'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar.js'

class App extends React.Component {
  render() {
    return (
      <div className="app">

        <Sidebar />

        
      </div>
    )
  }
}

export default App