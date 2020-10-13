import {
    GET_REQUESTS, GET_REQUESTS_SUCCESS, GET_REQUESTS_FAILURE
} from "./Action";

const initialState = {
    isFetching: false,
    items: []
}


const posts = (state = [initialState], action) => {
    switch (action.type) {
        case GET_REQUESTS:
            return [
                ...state,
                {
                    isFetching: true,
                    items: []
                }
            ]
        case GET_REQUESTS_SUCCESS:
            return [
                ...state,
                {
                    isFetching: false,
                    items: action.posts,
                    lastUpdated: action.receivedAt
                }
            ]
    }
}