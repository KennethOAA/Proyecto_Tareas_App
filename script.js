import { Tarea } from './tarea.js';

const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function mostrarTarea(tarea){
    const li= document.createElement('li');
    li.textContent = tarea.getTexto()
    li.className = "bg-white p-3 rounded shadow hover:bg-gray-100 cursor-pointer";
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