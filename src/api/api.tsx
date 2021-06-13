import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: "https://api.github.com",
    headers: {
        "Accept": "application/vnd.github.v3+json"
    }, 
})

export const gitAPI = {

    getCommits(searchQuery: string = ''){
        return instance.get(`/search/commits?q=${searchQuery}&sort=committer-date&per_page=100`)
    },

    getRepos(searchQuery: string = "stars:%3E1") {
        return instance.get(`/search/repositories?q=${searchQuery}&sort=stars&per_page=100`)
    },
}

export type ItemsType={
    items:[]
    sha:string
}
