import React from "react"
import PostList from './components/PostList.js'
import PostCreate from './components/PostCreate.js'
import PostEdit from './components/PostEdit.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import SidebarOption from "./SidebarOption.js"
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add"
import PersonOutline from "@material-ui/icons/PersonOutline"
import Message from "@material-ui/icons/Message"
import './Sidebar.css'

function Sidebar(){
    return (
        <div className = 'sidebar'>
        
          <SidebarOption active text="UCLA" link="/" Icon={HomeIcon}/> 
          <SidebarOption text="Posts" link="/" Icon={Message}/> 
          <SidebarOption text="Create Post" link="/create" Icon={AddIcon}/> 
          <SidebarOption text="User" link="/" Icon={PersonOutline}/> 

        </div>
    )
}

export default Sidebar;