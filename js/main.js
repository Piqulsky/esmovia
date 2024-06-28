let textInput = document.getElementById("textInput");

textInput.addEventListener("keypress", e => {
    if (e.key == "Enter") addTask()
})

const addTask = () => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    let label = document.createElement("label");
    label.innerText = textInput.value;
    div.appendChild(input);
    div.appendChild(label);
    document.getElementById("checklist").appendChild(div);
}
