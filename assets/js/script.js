const tareas = [
    {id:10, nombre: "Recoger a Elían", completada: false },
    {id:20, nombre: "Clase de plastilina", completada: false},
    {id:30, nombre: "Entremiento de futbol", completada: false}
];

const tbody = document.querySelector("tbody")
const btnAgregar = document.querySelector("#agregarTarea")
const input = document.querySelector("#nuevaTarea")



btnAgregar.addEventListener("click",()=>{
    let i = tareas[tareas.length-1].id +10
    nuevatarea = {id: i, nombre: input.value, completada:false}
    tareas.push(nuevatarea)
    input.value = ""
    renderRows(tareas)
})

function renderRows(tareas){
    let html = "";
    tareas.forEach((tarea)=>{
        html +=
        `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre} <input id ="complete" type="checkbox" value=${tarea.completada} onclick="completar(${tarea.id})"><button onclick="borrar(${tarea.id})">x</button></td>
        </tr>`;
    });
    tbody.innerHTML= html;
    total.innerHTML = tareas.length;
}

function borrar(id){
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index,1)
    renderRows(tareas)
}

const total = document.querySelector("#total")
const realizadas = document.querySelector("#complete")


const tareasRealizadas =  tareas.filter((tarea) => tarea.completada == true)

realizadas.innerHTML = tareasRealizadas.length

const completed = document.querySelectorAll('#complete')
completed.forEach((inp) =>{
    inp.addEventListener("click", ()=>{
        const index = tareas.findIndex((tarea)=> tarea.id == id)
        if (tareas[index].completada == false){
            tareas[index].completada = true
        }
        else if(tareas[index].completada == true){
            tareas[index].completada = false
        }
    })
})

function completar(id){
    const index = tareas.findIndex((tarea)=> tarea.id == id)
        if (tareas[index].completada == false){
            tareas[index].completada = true
        }
        else if(tareas[index].completada == true){
            tareas[index].completada = false
        }
    }  



