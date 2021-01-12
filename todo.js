function newTask() {
  let div = document.createElement("div");
  let inputNewTaskValue = document.getElementById("inputNewTask").value;
  let text = document.createTextNode(inputNewTaskValue);
  div.appendChild(text);
  if (inputNewTaskValue !== "") {
    document.getElementById("tasks").appendChild(div);
  }
  document.getElementById("inputNewTask").value = "";

  let newDeleteButton = document.createElement("input");
  newDeleteButton.type = "button"
  newDeleteButton.className = "delete";
  newDeleteButton.value = "Supprimer";
  newDeleteButton.onclick = function() {
    div.remove()
}
  div.appendChild(newDeleteButton);

  let newEditButton = document.createElement("input");
  newEditButton.type = "button"
  newEditButton.className = "edit";
  newEditButton.value = "Editer";
  div.appendChild(newEditButton);
}
