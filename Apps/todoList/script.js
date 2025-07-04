document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task}</span>
        <span class="delete-btn" data-index="${index}">&times;</span>
      `;
      taskList.appendChild(li);
    });

    // Add event listener to delete buttons
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        tasks.splice(index, 1);
        renderTasks();
        saveTasksToLocalStorage();
      });
    });
  }

  addTaskBtn.addEventListener("click", function () {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
      tasks.push(newTask);
      taskInput.value = "";
      renderTasks();
      saveTasksToLocalStorage();
    }
  });

  renderTasks();
});
