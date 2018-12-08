

export const currentUser = (username) => {
    console.log('current user action')
    console.log(username)
    return {
        type: "CURRENT_USER",
        username
    }
}






export const onLogin = () => {
    console.log('login action')

    return dispatch => {
        // GRAB FROM SERVER SIDE
        let username = 'steven'
        dispatch(currentUser(username))
    }
}

