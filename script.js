import { Tarea } from './tarea.js';

const input = document.getElementById('taskInput');
const boton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const taskDate = document.getElementById('taskDate');
const taskDateLimit = document.getElementById('taskDateLimit');

//Boton de limpieza
const botonLimpiar = document.getElementById('clearButton');

function mostrarTarea(tarea) {
    const li = document.createElement('li');
    li.innerHTML = `
    <div>
      <span>${tarea.getTexto()}</span>
      ${
        tarea.getFechaAgendada()
          ? `<br>📅 ${tarea.getFechaAgendada()} ${tarea.getFechaLimite ? ` hasta 📅 ${tarea.getFechaLimite()}` : ''}`
          : ''
      }
    </div>
  `;
    li.className = "bg-white p-3 rounded shadow hover:bg-gray-100 cursor-pointer";
    taskList.appendChild(li);
    li.addEventListener('click', function () {
        tarea.setCompletada(!tarea.getCompletada());
        if (tarea.getCompletada()) {
            li.classList.add('line-through', 'text-gray-500');
        } else {
            li.classList.remove('line-through', 'text-gray-500');
        }
        guardarTareas()
    })

}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

let tareas = [];
let tareasGuardadas = localStorage.getItem("tareas");



//Muestra las tareas guardadas al cargar la página
if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas).map(obj => Object.assign(new Tarea(), obj));
    tareas.forEach((tarea) => {
        mostrarTarea(tarea)
        if (tarea.getCompletada()) {
            const li = taskList.lastChild;
            li.classList.add('line-through', 'text-gray-500');
        }
    });
}

boton.addEventListener('click', function () {
    const tastValue = input.value.trim();
    const fechaSeleccionada = taskDate.value;
    const fechaLimite = taskDateLimit.value
    if (tastValue != '') {
        const nuevaTarea = new Tarea(tastValue,fechaSeleccionada || null,fechaLimite || null);
        tareas.push(nuevaTarea)
        guardarTareas();
        input.value = '';
        taskDate.value = ''; 
        mostrarTarea(nuevaTarea)
    }
});

botonLimpiar.addEventListener('click', function () {
    localStorage.clear();
    tareas = []; 
    taskList.innerHTML = ''
});