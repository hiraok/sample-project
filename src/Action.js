import Twitter from 'twitter-lite';

const client = new Twitter({
    subdomain: process.env.REACT_APP_SUB_DOMAIN,
    consumer_key: process.env.REACT_APP_CONSUMER_KEY,
    consumer_secret: process.env.REACT_APP_CONSUMER_KEY_SECRET,
    bearer_token: process.env.REACT_APP_BEARER_TOKEN
});

export const GET_REQUESTS = 'GET_REQUESTS'
const getRequests = () => {
    return {
        type: GET_REQUESTS
    }
}


export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS'
const getRequestsSuccess = (json) => {
    return {
        type: GET_REQUESTS_SUCCESS,
        posts: json,
        receivedAt: Date.now()
    }
}

export const GET_REQUESTS_FAILURE = 'GET_REQUEST_FAILURE'
const getRequestsFailure = (error) => {
    return {
        type: GET_REQUESTS_FAILURE,
        error
    }
}


export async function getTwitter() {
    return (dispatch) => {
        dispatch(getRequests())
        return client.get('search/tweets', {
            q: '上野動物園',
            result_type: 'mixed',
            include_entities: 'true'
        });
    }
}

