function renderTasks(filter = "all") {
  document.querySelectorAll(".marker").forEach((el) => el.remove());

  let filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.done;
    if (filter === "completed") return task.done;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("marker");
    taskDiv.innerHTML = `
      <input type="checkbox" id="task-${index}" ${task.done ? "checked" : ""}>
      <label for="task-${index}" class="${task.done ? "done" : ""}">${task.text}</label>
      <button class="delete">✕</button>
    `;
    container.insertBefore(taskDiv, addBtn);
  });

  container.addEventListener("change", (event) => {
    if (event.target.matches(".marker input")) {
      const checkbox = event.target;
      const taskIndex = Array.from(container.querySelectorAll(".marker")).indexOf(checkbox.closest(".marker"));
      tasks[taskIndex].done = checkbox.checked;
      renderTasks(currentFilter);
    }
  });

  container.addEventListener("click", (event) => {
    if (event.target.matches(".delete")) {
      const btn = event.target;
      const taskIndex = Array.from(container.querySelectorAll(".marker")).indexOf(btn.closest(".marker"));
      tasks.splice(taskIndex, 1);
      renderTasks(currentFilter);
    }
  });
}
