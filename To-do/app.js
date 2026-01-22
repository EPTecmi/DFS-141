const addTaskButton = document.querySelector('#add-task-button');
const newTaskInput = document.querySelector("#new-task")
const list = document.querySelector("#todo-list")
const completedList = document.querySelector("#completed-list")
const messageBox = document.querySelector(".msg")
const taskCount = document.querySelector("#count")

newTaskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click()
  }
})

addTaskButton.addEventListener("click", (e) => {

  if (newTaskInput.value.trim() !== "") {
    const li = createListItem()
    li.appendChild(createDeleteButton())
    newTaskInput.value = ""
    showMessage("Tarea agregada")
    li.addEventListener("click", (event) => {
      console.log(event.target.tagName)
      if (event.target.tagName === "LI") {
        li.classList.add("completed")
        li.remove()
        completedList.appendChild(li)
        showMessage("Tarea completada", "ok")
        updateTaskCount()
        return
      } else if (event.target.tagName === "BUTTON") {
        li.remove()
        showMessage("Tarea eliminada", "warning")
        updateTaskCount()
        return;
      }
    })
    updateTaskCount()
    return;
  }
  showMessage("Campo vacio", "error")
})


const updateTaskCount = () => {
  const count = list.children.length;
  taskCount.textContent = `Tarea: ${count}`;
}


const showMessage = (text, className = "ok") => {
  messageBox.textContent = text
  messageBox.className = className
  setTimeout(() => {
    messageBox.classList.add("hide")
  },2000)
}

const createListItem = () => {
  const li = document.createElement("li")
  li.textContent = newTaskInput.value
  list.appendChild(li)
  return li;
}

const createDeleteButton = () => {
  const delButton = document.createElement("button")
  delButton.textContent = "X"
  delButton.classList.add("close-btn")
  return delButton;
}