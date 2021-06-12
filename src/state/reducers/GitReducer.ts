import {gitAPI} from "../../api/api";
import {Dispatch} from "redux";

const initialState = {
    items: [],
    isFetching: true,
}

export const gitReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "GIT/REQUEST_GIT":
            return {
                ...state,
                items: action.payload.items,
            };
        default:
            return state;
    }
}

export const requestGitTC = () => (dispatch: Dispatch) => {
    return gitAPI.getRepos()
        .then((res) => {
            if (res) {
                dispatch(requestGitAC(res.data));
            }
        })
        .catch((error) => {

        })
}

export const requestGitAC = (repos:any) => ({type: "GIT/REQUEST_GIT", payload:repos} as const);

type InitialStateType = typeof initialState;
export type IsAuthType = ReturnType<typeof requestGitAC>;
type ActionsType = IsAuthType;