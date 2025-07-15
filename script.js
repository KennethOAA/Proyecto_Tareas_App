import { Tarea } from './tarea.js';

const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function mostrarTarea(tarea) {
    const li = document.createElement('li');
    li.className = "bg-white p-3 rounded shadow flex items-center space-x-3 hover:bg-gray-100 cursor-pointer";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.getCompletada();
    checkbox.className = "form-checkbox h-5 w-5 text-blue-600";

    checkbox.addEventListener('change', () => {
        tarea.setCompletada(checkbox.checked);
        guardarTareas();

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    const span = document.createElement('span');
    span.textContent = tarea.getTexto();

    if (tarea.getCompletada()) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
}


function guardarTareas(){
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

let tareas=[];
let tareasGuardadas = localStorage.getItem("tareas");



//Muestra las tareas guardadas al cargar la página
if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas).map(obj=> Object.assign(new Tarea(),obj));
    tareas.forEach((tarea)=>{
        mostrarTarea(tarea)
    });
}

boton.addEventListener('click', function() {
    const tastValue = input.value.trim();
    if (tastValue != '') {
        const nuevaTarea = new Tarea(tastValue);
        tareas.push(nuevaTarea)
        guardarTareas();
        input.value = '';
        //Muestra la nueva tarea al guardarla
        mostrarTarea(nuevaTarea)
    }
});