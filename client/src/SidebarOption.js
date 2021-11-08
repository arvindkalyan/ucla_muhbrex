import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import "./SidebarOption.css";


function SidebarOption({ active, text, link, Icon }) {
  return (
    <div>
      <Button className="sidebarOption">
        <Icon />
        <Link to={link}> <h2>{text}</h2>
        </Link>
      </Button>
    </div>
  );
}

export default SidebarOption;