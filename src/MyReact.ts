let globalId = 0;
let globalParent: HTMLElement;
const componentState = new Map();

export function useState(initialState: any) {
    const id = globalId;
    const parent = globalParent
    globalId += 1;

    return (() => {
        const { cache } = componentState.get(parent)
        if (cache[id] == null) {
            cache[id] = {value: typeof initialState === 'function' ? initialState() : initialState,}
        }

        const setState = (state: (arg0: any) => any) => {
            const { props, component } = componentState.get(parent)
            if (typeof state === 'function') {
                cache[id].value = state(cache[id].value)
            } else {
                cache[id].value = state
            }

            render(component, props, parent)
        }

        return [cache[id].value, setState]
    })()
}


export function render(component: (props: any) => string, props: { propCount: number }, parent: HTMLElement) {
    const state = componentState.get(parent) || { cache: [] };
    componentState.set(parent, { ...state, component, props });
    globalParent = parent;

    const output = component(props);
    globalId = 0;
    parent.textContent = output;
}