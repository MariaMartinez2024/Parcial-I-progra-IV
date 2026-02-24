
// WebComponent
class TaskComponent extends HTMLElement{

connectedCallback(){

this.innerHTML = `

<div class="task">

<b>Tarea:</b> ${this.getAttribute("name")} <br>

<b>Prioridad:</b> ${this.getAttribute("priority")} <br>

<button class="delete-btn">Eliminar</button>

</div>

`;

// evento eliminar
this.querySelector(".delete-btn").addEventListener("click", () => {

this.remove();

});

}

}

customElements.define("task-item", TaskComponent);


// evento agregar
document.getElementById("taskForm").addEventListener("submit", function(e){

e.preventDefault();

let task = document.getElementById("taskInput").value.trim();

let priority = document.getElementById("priority").value;


// validación
if(task === "" || priority === ""){

alert("Debe completar todos los campos");

return;

}


// crear componente
let newTask = document.createElement("task-item");

newTask.setAttribute("name", task);

newTask.setAttribute("priority", priority);


// mostrar
document.getElementById("taskList").appendChild(newTask);


// limpiar
document.getElementById("taskInput").value = "";

document.getElementById("priority").value = "";

});