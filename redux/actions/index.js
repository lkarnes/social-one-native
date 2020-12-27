

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