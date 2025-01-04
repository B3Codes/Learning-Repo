const addTaskInput = document.getElementById("addTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const showTaskList = document.getElementById("showTaskList");

// let index = 0;

addTaskBtn.addEventListener("click",() => {
  console.log(addTaskInput.value);
  const taskText = addTaskInput.value.trim();

  if(!taskText)
      return;

  const item = document.createElement('li');
  item.className = "list-group-item align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent";
  const chkBoxDiv = document.createElement('div');

  chkBoxDiv.className = "form-check";
  const chkBox = document.createElement('input');
  chkBox.className = "form-check-input me-0";
  chkBox.type = "checkbox";
  chkBox.id = `chkBox-${taskText}`;
  chkBox.value = taskText;

  const label = document.createElement('label');
  label.className ="form-check-label lead fw-normal mb-0";
  label.setAttribute('for', `chkBox-${taskText}`);
  label.textContent = taskText;

  chkBoxDiv.appendChild(chkBox);
  chkBoxDiv.appendChild(label)

  const edelDiv = document.createElement('div');
  edelDiv.className = 'd-flex flex-row justify-content-end mb-1';

  // dynamically create <a> tag for edit
  const editAnchor = document.createElement('a');
  editAnchor.id = 'editTodoBtn';
  editAnchor.className = 'text-info';
  editAnchor.href = "#!";
  editAnchor.setAttribute('data-mdb-tooltip-init','');
  editAnchor.title = 'Edit todo';

  // dynamically create <i> tag for edit
  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pencil-alt me-3';
  editAnchor.appendChild(editIcon);

  // dynamically create <a> tag for delete
  const deleteAnchor = document.createElement('a');
  deleteAnchor.id = 'deleteTodoBtn';
  deleteAnchor.className = "text-danger";
  deleteAnchor.href = "#!";
  deleteAnchor.setAttribute('data-mdb-tooltip-init', '');
  deleteAnchor.title = 'Delete todo';

  // dynamically create <i> tag for delete
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash-alt'

  deleteAnchor.appendChild(deleteIcon);

  edelDiv.appendChild(editAnchor);
  edelDiv.appendChild(deleteAnchor);


  item.appendChild(chkBoxDiv);
  item.appendChild(edelDiv);
  showTaskList.appendChild(item);

  addTaskInput.value = "";


  document.getElementById('editTodoBtn').addEventListener('click',()=> {
    console.log("Edit Todo");
  });
  
  document.getElementById('deleteTodoBtn').addEventListener('click',()=> {
    console.log("Delete Todo");
  })

})



