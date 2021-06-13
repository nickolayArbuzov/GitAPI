import React, {useEffect} from 'react';
import s from "./Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {requestGitTC} from "../../state/reducers/GitReducer";
import {appRootStateType} from "../../state/store";

export const Main = () => {

    const dispatch = useDispatch();
    const repos = useSelector<appRootStateType>(state => state.git.items)

    useEffect(() => {
        dispatch(requestGitTC())
    }, [])

    return (
        <div className={s.container}>

        </div>
    )
};