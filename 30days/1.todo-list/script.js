const addTaskInput = document.getElementById("addTaskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const showTaskList = document.getElementById("showTaskList");

addTaskBtn.addEventListener("click",() => {
  console.log(addTaskInput.value);
  const item = document.createElement('li');
  item.textContent = addTaskInput.value;
  showTaskList.appendChild(item);
  addTaskInput.value = "";
})
