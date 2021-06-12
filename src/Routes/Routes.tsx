import React from "react";
import {Route, Switch} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Main} from "../components/main/Main";
import s from "./Routes.module.css";

export const Routes = () => {
    return (
        <div>
            <div>
                <NavLink className={s.container} to={'/'}>Main</NavLink>
            </div>
            <Switch>
                <Route exact path={'/'} component={Main}/>
            </Switch>
        </div>
    )
}