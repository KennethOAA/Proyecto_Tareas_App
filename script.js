const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tareas=[];
let tareasGuardadas = localStorage.getItem("tareas");

function mostrarTarea(tarea){
    const li= document.createElement('li');
    li.textContent = tarea;
    li.className = "bg-white p-3 rounded shadow hover:bg-gray-100 cursor-pointer";
    taskList.appendChild(li);
}

//Muestra las tareas guardadas al cargar la página
if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
    tareas.forEach((tarea)=>{
        mostrarTarea(tarea)
    });
}

boton.addEventListener('click', function() {
    const tastValue = input.value.trim();
    if (tastValue != '') {
        tareas.push(tastValue)
        localStorage.setItem("tareas",JSON.stringify(tareas));
        input.value = '';
        //Muestra la nueva tarea al guardarla
        mostrarTarea(tastValue)
    }
});