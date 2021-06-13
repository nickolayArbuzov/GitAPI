import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://api.github.com",
    headers: {
        "Accept": "application/vnd.github.v3+json"
    }, 
})

export const gitAPI = {

    getRepos(searchQuery: string = "stars:%3E1") {
        return instance.get(`/search/repositories?q=${searchQuery}&sort=stars`)
    },
}

export type ItemsType={
    items:[]
    sha:string
}