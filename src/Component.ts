import { useState, useEffect } from './MyReact'

export default function Component({ propCount, buttonElem }: any) {
    const [count, setCount] = useState(0);
    const propCountDoubled = 0

    useEffect(() => {
        const handler = () => setCount((prevCount: number) => prevCount += 1)
        buttonElem.addEventListener('click', handler);

        return () => buttonElem.removeEventListener('click', handler)
    }, [buttonElem])


    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
`
}