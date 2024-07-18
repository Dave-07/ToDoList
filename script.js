

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
let len;


inputTask.addEventListener('input', e => {
    len = e.target.value.length;
    if (len >= 150) {
        alert('Max length of 150 chars exceeded');
    }
});



addTask.addEventListener('click', function () {

    if (inputTask.value.trim() === '') {
        alert("Please, fill up the task!");
        inputTask.value = '';
        return;
    } else if (taskContainer.children.length >= 5) {
        alert("Sorry, only 5 tasks allowed");
        inputTask.value = '';
        return;
    }


    let task = document.createElement('div');
    let containerBtn = document.createElement('div');
    let containerP = document.createElement('div');
    let inputValue = document.createElement('p');

    let checkBtn = document.createElement('button');
    let checkIcon = document.createElement('i');

    let deleteBtn = document.createElement('button');
    let deleteIcon = document.createElement('i');

    containerBtn.setAttribute('id', 'container-buttons');
    containerP.setAttribute('id', 'container-p');
    inputValue.setAttribute('id', 'input-value');


    deleteBtn.setAttribute('id', 'delete-button');
    deleteBtn.classList.add('task-buttons');
    deleteIcon.className = "fa-solid fa-trash-can";
    deleteBtn.appendChild(deleteIcon);

    checkBtn.setAttribute('id', 'check-button');
    checkBtn.classList.add('task-buttons');
    checkIcon.className = "fa-solid fa-check";
    checkBtn.appendChild(checkIcon);

    inputValue.append(inputTask.value);
    containerBtn.append(checkBtn);
    containerBtn.append(deleteBtn);
    containerP.append(inputValue);

    task.append(containerP);
    task.append(containerBtn);

    task.classList.add('task');
    inputTask.value = '';

    taskContainer.appendChild(task);

    if (len <= 23) {
        containerP.style.overflowY = 'hidden';
    }

    deleteBtn.addEventListener('click', function () {
        document.querySelector('.task').remove();
    });

    checkBtn.addEventListener('click', function () {
        containerBtn.previousElementSibling.style.textDecoration = '1px line-through black solid';
    });

})











