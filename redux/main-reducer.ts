const mainReducer = (state: { count: number }, action: { type: string; count: number }) => {
    if (action.type === 'INCREMENT') {
        state.count += 1
    } else if (action.type === 'DECREMENT') {
        state.count -= 1
    }

    return state
}

export default mainReducer