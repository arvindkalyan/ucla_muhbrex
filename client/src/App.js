import React from 'react'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
class App extends React.Component{
    render() {
        return (
        
            <Router>
                {/* TODO: Make the following set of stuff 
                before the Routes block into an actual nice navbar */}
                <h1> <Link to="/"> UCLA </Link> </h1>
                <button> <Link to="/"> Posts </Link> </button>
                <button> <Link to="/create"> Create post </Link> </button> 
                <Routes>
                    <Route path="/" element={<PostList/>} />
                    <Route path="/create" element={<PostCreate/>} />
                </Routes>
                {/* TODO: Add routes for editing a post and liking it */}
            </Router>
        )
    }
}

export default App