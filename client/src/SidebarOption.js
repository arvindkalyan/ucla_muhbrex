import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import "./SidebarOption.css";


function SidebarOption({ active, text, link, Icon }) {
  return (
    <div>
      <Button component={Link} to={link} className="sidebarOption" fullWidth style={{ borderRadius: 30, justifyContent: 'left'}}>  
        <Icon className="sidebarOption"/>
        <h2> {text} </h2>
      </Button>
    </div>
  );
}

export default SidebarOption;