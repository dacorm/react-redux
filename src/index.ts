import { render } from "./MyReact";
import Component from "./Component";

function renderComponent() {
    render(Component, { propCount: 1 }, document.getElementById('root'))
}

console.log(document.getElementById('root'))
renderComponent();