import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signIn, signOut } from '../actions'

function PostCreateButton(props) {
    if (props.isSignedIn) {
        return (
            <button> <Link to="/create"> Create post </Link> </button>
        )
    } else {
        return null;
    }
    
}

const mapStateToProps = (state) => {
    return { 
        isSignedIn: state.auth.isSignedIn,  
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { signIn, signOut })(PostCreateButton);