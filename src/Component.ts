import { useState, useEffect } from './MyReact';
import store, {decrementActionCreator, incrementActionCreator} from "../redux/state";

export default function Component({ propCount, buttonElem, buttonElemSecond }: any) {
    const [counter, setCounter] = useState(0);
    const propCountDoubled = 0;
    let count = store._state.mainPage.count;
    const dispatch = store.dispatch.bind(store)

    useEffect(() => {
        const handler = () => {
            dispatch(incrementActionCreator());
            count = store._state.mainPage.count;
            setCounter((prevCount: number) => prevCount += 1)
        }
        buttonElem.addEventListener('click', handler);

        return () => buttonElem.removeEventListener('click', handler)
    }, [counter])

    useEffect(() => {
        const handler = () => {
            dispatch(decrementActionCreator());
            count = store._state.mainPage.count;
            setCounter((prevCount: number) => prevCount += 1)
        }
        buttonElemSecond.addEventListener('click', handler);

        return () => buttonElemSecond.removeEventListener('click', handler)
    }, [counter])




    return `
        Count: ${count}
`
}