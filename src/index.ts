import { render } from "./MyReact";
import Component from "./Component";

let propCount = 0

function renderComponent() {
    render(Component,
        { propCount, buttonElem: document.getElementById('btn-count'),
            buttonElemSecond: document.getElementById('btn-count-2'), }, document.getElementById('root'))
}

renderComponent();