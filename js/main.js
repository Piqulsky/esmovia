let textInput = document.getElementById("textInput");

const TYPE_UNFINISHED = 0;
const TYPE_FINISHED = 1;
const TYPE_ALL = 2;
let tasks = [[TYPE_UNFINISHED, "test"]]
let currentType = TYPE_ALL;

const setTasks = () => {
    console.log(currentType);
    switch(currentType){
        case TYPE_ALL:
            document.getElementById("checklist").innerHTML = "";
            tasks.forEach((task, id) => {
                addTaskView(task[1], task[0], id);
            })
            break;
        case TYPE_UNFINISHED:
            document.getElementById("checklist").innerHTML = "";
            tasks.forEach((task, id) => {
                if (task[0] == TYPE_UNFINISHED)
                    addTaskView(task[1], task[0], id);
            })
            break;
        case TYPE_FINISHED:
            document.getElementById("checklist").innerHTML = "";
            tasks.forEach((task, id) => {
                console.log(task[0] == TYPE_FINISHED);
                if (task[0] == TYPE_FINISHED)
                    addTaskView(task[1], task[0], id);
            })
            break;
    }
}

const addTaskView = (text, isChecked, index) => {
    let div = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", index)
    input.addEventListener("click", e => {
        tasks[e.target.id][0] = !tasks[e.target.id][0];
        setTasks();
    })
    if (isChecked)
        input.setAttribute("checked", isChecked);
    let label = document.createElement("label");
    label.innerText = text;
    div.appendChild(input);
    div.appendChild(label);
    document.getElementById("checklist").appendChild(div);
}

const addTask = () => {
    tasks.push([TYPE_UNFINISHED, textInput.value])
    setTasks()
}

textInput.addEventListener("keypress", e => {
    if (e.key == "Enter") addTask()
})

document.getElementById("typeSelect").addEventListener("change", e => {
    currentType = e.target.value;
    setTasks();
})

setTasks();
