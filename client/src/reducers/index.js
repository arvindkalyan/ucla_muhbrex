import { combineReducers } from 'redux'
import authReducer from './authReducer';
import likesReducer from './likesReducer';

/*
Connecting to global state
Provider in src index.js gives whatever is wrapped (<App/>) in Provider tags access to the global state
connect in child components connects that child component to the global state
    mapStateToProps maps global state to the component's props, to be accessed as this.props...
    need to connect the action creators too

Reducers and Actions
    In order to update global state, need to rely on action creators
    action creators are just functions that we can call but return interesting stuff
        action creators return a TYPE and a PAYLOAD. TYPE names the action creator
    reducers update the state based on action TYPE. ...state means let rest of state be the same as it was.
        reducers take in an action as an argument
    combineReducers connects the reducer to state.

*/

export default combineReducers({
    auth: authReducer,
    likes: likesReducer
});