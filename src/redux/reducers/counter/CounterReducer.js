const initialState = {
    count: 0,
    length: 10,
    maxCount: 100,
    changeValue: "0",
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + parseInt(state.changeValue),
            }
        case "decrement":
            return {
                ...state,
                count: state.count - parseInt(state.changeValue),
            }
        case "changeValue":
            return {
                ...state,
                changeValue: action.payload
            }
        default:
            return state
    }
}

export default CounterReducer