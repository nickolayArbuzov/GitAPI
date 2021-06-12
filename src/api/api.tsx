import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://api.github.com",
})

export const gitAPI = {

    getRepos(searchQuery: string = "stars:%3E1") {
        return instance.get(`/search/repositories?q=${searchQuery}&sort=stars`)
    },
}