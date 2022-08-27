import mainReducer from "./main-reducer";


const store = {
    _state: {
        mainPage: {
            count: 0
        },
    },
    getState() {
        return this._state
    },
    _rerender() {
        console.log('state changed')
    },
    subscribe(observer: void) {
        this._rerender = observer
    },
    dispatch(action: any) {
        this._state.mainPage = mainReducer(this._state.mainPage, action);
        this._rerender(this._state);
    }
}
export const incrementActionCreator = () => {
    return {type: 'INCREMENT'}
}

export const decrementActionCreator = () => {
    return {type: 'DECREMENT'}
}



export default store