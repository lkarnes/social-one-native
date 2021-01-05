

export const signIn = (payload) => {
    return {
        payload: payload,
        type: "SIGN_IN"
    }
}

export const fillFeed = (payload) => {
    return {
        payload: payload,
        type: "FILL_FEED"
    }
}

export const setToken = (payload) => {
    return {
        payload: payload,
        type: "SET_TOKEN"
    }
}

export const setId = (payload) => {
    return {
        payload: payload,
        type: "SET_ID"
    }
}