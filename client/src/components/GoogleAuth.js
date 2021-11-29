import React from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'
import "./SidebarOption.css";
import "./Sidebar.css"
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded'
import ThumbUpAltRounded from "@material-ui/icons/ThumbUpAltRounded";
import { Button } from "@material-ui/core";


class GoogleAuth extends React.Component {
    //state = { isSignedIn: null }

    //type gapi in console
    //gapi.auth2.getAuthInstance
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '314795062888-f620rd4hv9ghota07aq6vs7tbmgbbkpj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getEmail());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <div className="sidebar">
                <Button onClick={this.onSignOutClick} className="sidebarOption" fullWidth style={{ borderRadius: 30, justifyContent: 'left'}}>
                    
                    <ThumbUpAltRounded />
                    <h2>Sign Out</h2>
                </Button>
                </div>
            )
        } else {
            return (
                <div className="sidebar">
                    <Button onClick={this.onSignInClick} className="sidebarOption" fullWidth style={{ borderRadius: 30, justifyContent: 'left'}}>
                    
                        <ThumbUpAltRounded />
                        <h2>Sign in with Google</h2>
                    </Button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);