const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


boton.addEventListener('click', function() {
    const tastValue = input.value.trim();
    if (tastValue != '') {
        const li= document.createElement('li');
        li.textContent = tastValue;
        taskList.appendChild(li);
        input.value = '';
    }
});