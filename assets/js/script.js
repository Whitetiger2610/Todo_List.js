const tbody = document.querySelector("tbody")
const btnAgregar = document.querySelector("#agregarTarea")
const input = document.querySelector("#nuevaTarea")
const total = document.querySelector("#total")
const realizadas = document.querySelector("#complete")

const tareas = [
    {id:10, nombre: "Recoger a Elían", completada: false },
    {id:20, nombre: "Clase de plastilina", completada: true},
    {id:30, nombre: "Entremiento de futbol", completada: false}
];
renderRows()

btnAgregar.addEventListener("click",()=>{
    let i = tareas[tareas.length-1].id +10
    nuevatarea = {id: i, nombre: input.value, completada:false}
    tareas.push(nuevatarea)
    input.value = ""
    renderRows()
})

function renderRows(){
    let html = "";
    let completadas = 0;
    tareas.forEach((tarea)=>{
        const tareaCompletada = tarea.completada ? 'checked' : '';
        html +=
        `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.nombre} <input id="complete${tarea.id}" type='checkbox' ${tareaCompletada}><button onclick="borrar(${tarea.id})">x</button></td>
        </tr>`;
        if (tarea.completada){
            completadas++;
        }
    });
   
    tbody.innerHTML= html;
    total.innerHTML = tareas.length;
    realizadas.innerHTML = completadas;
    const checkboxes = document.querySelectorAll("input[type='checkbox']");//check
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const id = parseInt(checkbox.id.replace("complete", ""));
            const tarea = tareas.find(t => t.id === id);
            tarea.completada = checkbox.checked;
            renderRows();
            
        });
    }); 
  
}


function borrar(id){
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index,1)
    renderRows()
}



renderRows();

// function completar(id){
//     const index = tareas.findIndex((tarea)=> tarea.id == id)
//         if (tareas[index].completada == false){
//             tareas[index].completada = true
//         }
//         else if(tareas[index].completada == true){
//             tareas[index].completada = false
//         }
//     }  



