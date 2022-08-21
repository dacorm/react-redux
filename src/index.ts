import { render } from "./MyReact";
import Component from "./Component";

let propCount = 0
document.getElementById('btn-prop').addEventListener('click', () => {
    propCount += 1
    renderComponent();
})

function renderComponent() {
    render(Component, { propCount }, document.getElementById('root'))
}

renderComponent();