const increment_decrement_Val = (actionType) => {
    return {
        type: actionType === "increment" ? "increment" : "decrement"
    }
}

const changeInputVal = (inputText) => {
    return { type: "changeValue", payload: inputText }
}

export { increment_decrement_Val, changeInputVal }