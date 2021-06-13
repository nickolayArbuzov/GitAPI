import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {Main} from "./components/main/Main";

export const App = () => {

    return (
        <div className="App">
            <Main />
        </div>
    )
};

export default App;
