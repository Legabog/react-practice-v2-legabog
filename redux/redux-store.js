import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunk from "redux-thunk";

let reducers = combineReducers({
    profileReducer, 
    dialogsReducer, 
    navbarReducer,
    usersReducer,
    authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;