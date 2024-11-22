function agregarTarea() {
  const tareaInput = document.getElementById("tarea");
  const nuevaTarea = tareaInput.value;
  const listaTareas = document.getElementById("listaTareas");

  if (nuevaTarea !== "") {
      const itemLista = document.createElement("li");
      itemLista.textContent = nuevaTarea;

      // Botón para marcar como completada
      const botonCompletar = document.createElement("button");
      botonCompletar.textContent = "Completada";
      botonCompletar.onclick = function() {
          itemLista.classList.toggle("completada");
      };

      // Botón para editar
      const botonEditar = document.createElement("button");
      botonEditar.textContent = "Editar";
      botonEditar.onclick = function(){
        let nuevaTarea = prompt("Escribe la nueva tarea");
          itemLista.textContent = nuevaTarea;
          itemLista.appendChild(botonCompletar);
          itemLista.appendChild(botonEditar);
          itemLista.appendChild(botonEliminar);
          
      };

      // Botón para eliminar
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.onclick = function() {
          listaTareas.removeChild(itemLista);
      };

      itemLista.appendChild(botonCompletar);
      itemLista.appendChild(botonEditar);
      itemLista.appendChild(botonEliminar);
      listaTareas.appendChild(itemLista);

      tareaInput.value = "";
  }
}