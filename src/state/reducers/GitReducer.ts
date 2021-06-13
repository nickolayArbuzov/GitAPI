import {gitAPI} from "../../api/api";
import {Dispatch} from "redux";

const initialState = {
    items: [],
    isFetching: true,
}

export const gitReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GIT/REQUEST_REPO":
            return {
                ...state,
                items: action.payload.items,
            };    
        default:
            return state;
    }
}

export const requestRepoTC = () => (dispatch: Dispatch) => {
    return gitAPI.getRepos()
        .then((res) => {
            if (res) {
                dispatch(requestRepoAC(res.data));
            }
        })
        .catch((error) => {

        })
}

export const requestCommitsTC = () => (dispatch: Dispatch) => {
    return gitAPI.getCommits()
        .then((res) => {
            if (res) {
                dispatch(requestRepoAC(res.data));
            }
        })
        .catch((error) => {

        })
}

export const requestRepoAC = (repos:any) => ({type: "GIT/REQUEST_REPO", payload:repos} as const);

type InitialStateType = typeof initialState;
export type RequestRepoType = ReturnType<typeof requestRepoAC>;
type ActionsType = RequestRepoType;