import React from "react"
import { connect } from "react-redux";


import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add"
import PersonOutline from "@material-ui/icons/PersonOutline"
import Message from "@material-ui/icons/Message"

import SidebarOption from "./SidebarOption.js"
import './Sidebar.css'

function Sidebar(props){
    return (
        <div className = 'sidebar'>
        
          <SidebarOption active text="UCLA" link="/" Icon={HomeIcon}/> 
          <SidebarOption text="Posts" link="/" Icon={Message}/> 
          {props.isSignedIn && <SidebarOption text="Create Post" link="/create" Icon={AddIcon}/>}
          {props.isSignedIn && <SidebarOption text="User" link={`/user/${props.userId}`} Icon={PersonOutline}/>}

        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(Sidebar);