import { useState } from './MyReact'

export default function Component({ propCount }: any) {
    const [count, setCount] = useState(0);
    const propCountDoubled = 0


    return `
        State: ${count}
        Prop: ${propCount}
        Prop Doubled: ${propCountDoubled}
`
}