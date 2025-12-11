const elements = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}

elements.input.addEventListener('input', handlerInput);

function handlerInput(event) {
    elements.output.textContent = event.currentTarget.value.trim() === "" ? "Anonymous" : event.currentTarget.value.trim()
}