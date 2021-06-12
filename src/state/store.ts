import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {gitReducer} from "./reducers/GitReducer"

const rootReducer = combineReducers({
    git : gitReducer, 
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type appRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store