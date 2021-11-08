import React from 'react'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
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
                    <Route path="/" exact element={<PostList/>} />
                    <Route path="/create" element={<PostCreate />} />
                    <Route path="/edit/:id" element={<PostEdit />} />

                    {/* TODO: how should we arrange routing for liking a post? */}
                </Routes>
                {/* TODO: Add routes for editing a post and liking it */}
            </Router>
        )
    }
}

export default App