let taskList = document.querySelector('#tasksList');
let todos = [];

function add() {
    let text = document.querySelector('#input');
    let duplicate;
    todos.forEach((element) => {
        if (text.value === element) {
            alert('This Todo Is Already Added In List!');
            duplicate = true; 
        }
    })

    if(text.value === '') {
        alert("here's Nothing To add")
    }
    else {
        if(duplicate !== true) {
            taskList.insertAdjacentHTML('afterbegin', `<li class="task" onclick="doneTask(this)">${text.value}</li><button class="cross" onclick="remove(this)">&#x2613;</button><br>`)
            text.value = '';
        }
    }

    document.querySelectorAll('.task').forEach((element) => {
        todos.push(element.textContent);
    })
}

function remove(cross) {
    cross.previousElementSibling.remove()
    cross.nextElementSibling.remove()
    cross.remove()
}

function doneTask(task) {
    task.classList.toggle('checked');
}
