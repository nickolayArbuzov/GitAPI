import React from 'react';
import s from "./Repo.module.css"

export const Repo = (props:any) => {

    const repo = props.r;

    return (
        <div className={s.container}>
            <div className={s.header}>
                <div className={s.name}>{repo.name}</div>
                <div className={s.language}>{repo.language}</div>
                <div className={s.stars}>{repo.stargazers_count}</div>
            </div>
            <div className={s.created}>{repo.created_at}</div>
            <a href={repo.html_url} className={s.link}>Ссылка на репозиторий: {repo.html_url}</a>
        </div>
    )
};