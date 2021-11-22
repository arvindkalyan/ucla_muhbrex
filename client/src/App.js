import React from 'react'
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import PostCreateButton from './components/PostCreateButton.js'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import GoogleAuth from './components/GoogleAuth.js'

//import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
//import AuthNav from './components/authbuttons/AuthNav.js';

//auth0
//wrap one level inside browser with <Auth0ProviderWithHistory>
//include <AuthNav /> after last <button>


class App extends React.Component{
    // constructor(props) {
    //     super(props)
    //     //this.auth = React.createRef()
    // }

    // componentDidMount() {
    //     console.log(this.auth.current)
    // }

    render() {
        return (
            <Router>
                {/* TODO: Make the following set of stuff 
                before the Routes block into an actual nice navbar */}
                <h1> <Link to="/"> UCLA </Link> </h1>``
                <button> <Link to="/"> Posts </Link> </button>
                <GoogleAuth />
                <PostCreateButton />
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