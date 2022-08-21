export function render(component: (props: any) => string, props: { propCount: number }, parent: HTMLElement) {
    const output = component(props)
    parent.textContent = output
}