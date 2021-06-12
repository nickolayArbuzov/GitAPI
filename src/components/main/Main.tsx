import React, {useEffect} from 'react';
import s from "./Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {requestGitTC} from "../../state/reducers/GitReducer"

export const Main = () => {

    const dispatch = useDispatch();
    const repos = useSelector(state => state.items)
    useEffect(() => {
        dispatch(requestGitTC())
    }, [])

    return (
        <div className={s.container}>

        </div>
    )
};