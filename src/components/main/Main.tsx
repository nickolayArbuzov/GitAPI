import React, {useEffect} from 'react';
import s from "./Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {requestRepoTC} from "../../state/reducers/GitReducer";
import {appRootStateType} from "../../state/store";
import {Repo} from "../repo/Repo";
import {ItemsType} from "../../api/api";

type ItemsSelectorType = {
    items: ItemsType[]
    isFetching: Boolean
}

export const Main = () => {

    const dispatch = useDispatch();
    const {items, isFetching} = useSelector<appRootStateType, ItemsSelectorType>(state => state.git)
    
    useEffect(() => {
        dispatch(requestRepoTC())
    }, [])

    return (
        <div className={s.container}>
            {items ? items.map(i => <Repo key={i.sha} r={i}/>) : null}
        </div>
    )
};