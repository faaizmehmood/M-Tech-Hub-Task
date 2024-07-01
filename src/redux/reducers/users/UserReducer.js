const intialState = {
    uid: 0,
    userName: '',
    userData: {},
    hobby: [],
    isUserLogin: false,
}


const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case "setID":
            return {
                ...state,
                uid: action.payload
            }
        case "setName":
            return {
                ...state,
                userName: action.payload
            }
        case "setUserData":
            let { uid, name } = action.payload
            return {
                ...state,
                uid: uid,
                userName: name
            }
        case "setIslogin":
            return {
                ...state,
                isUserLogin: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer
