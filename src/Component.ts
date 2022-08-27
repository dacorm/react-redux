import { useState, useEffect } from './MyReact';
import store, {decrementActionCreator, incrementActionCreator} from "../redux/state";

export default function Component({ propCount, buttonElem, buttonElemSecond }: any) {
    // const [count, setCount] = useState(0);
    const propCountDoubled = 0
    const count = store.getState()
    const dispatch = store.dispatch.bind(store)

    useEffect(() => {
        const handler = () => dispatch(incrementActionCreator())
        buttonElem.addEventListener('click', handler);
        console.log(store.getState());

        return () => buttonElem.removeEventListener('click', handler)
    }, [count])

    useEffect(() => {
        const handler = () => dispatch(decrementActionCreator())
        buttonElemSecond.addEventListener('click', handler);

        return () => buttonElem.removeEventListener('click', handler)
    }, [count])




    return `
        Count: ${count.mainPage.count}
`
}