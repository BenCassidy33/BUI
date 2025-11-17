function build_link(components, min = false) {
    return `http://localhost:3000/?components=${components}&minify=${min}`
}

const link_text = document.getElementById("link-text")
const component_picker = document.getElementById("component-picker")

let components = component_picker.querySelectorAll("input")
let selected_components = []

for (const component of components) {
    if (component.checked) {
        selected_components.push(component.value)
    }
}

link_text.innerHTML = `<div>${build_link(selected_components.join(','))}</div>`
