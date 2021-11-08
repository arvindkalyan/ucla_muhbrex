import React from "react"
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption.js"
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add"

function Sidebar(){
    return (
        <div className = 'sidebar'>
        
        <Router>
          {/* TODO: Make the following set of stuff 
                before the Routes block into an actual nice navbar */}
          <SidebarOption active text="UCLA" link="/" Icon={HomeIcon}/> 
          <SidebarOption text="Posts" link="/" Icon={HomeIcon}/> 
          <SidebarOption text="Create Post" link="/create" Icon={AddIcon}/> 

          <Routes>
            <Route path="/" exact element={<PostList />} />
            <Route path="/create" element={<PostCreate />} />
            <Route path="/edit/:id" element={<PostEdit />} />

            {/* TODO: how should we arrange routing for liking a post? */}
          </Routes>
          {/* TODO: Add routes for editing a post and liking it */}
        </Router>

        </div>
    )
}

export default Sidebar;