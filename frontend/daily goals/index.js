const title = document.getElementById("title");
const description = document.getElementById("description");

const form = document.querySelector("form");
const container = document.querySelector(".container");
const containery = document.querySelector(".containery");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const allTasks = () => {
  tasks.forEach((value, index) => {
    addTask(value, index);
  });
};

//to avoid repetation
const removeTasks = () => {
  tasks.forEach(() => {
    const divy = document.querySelector(".task");
    divy.remove();
  });
};

//add each task
const addTask = (task, index) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("innerClass");
  taskDiv.append(innerDiv);

  const pTitle = document.createElement("p");
  pTitle.innerText = task.title;
  const dBtn = document.createElement("button");
  dBtn.classList.add("delete");
  dBtn.innerText = "-";

  innerDiv.appendChild(pTitle);
  innerDiv.appendChild(dBtn);

  const spanD = document.createElement("span");
  spanD.innerText = task.description;
  taskDiv.append(spanD);

  dBtn.addEventListener("click", () => {
    removeTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    allTasks();
  });

  containery.append(taskDiv);
};

allTasks(); //this call is to display tasks from local

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  title.value = "";
  description.value = "";

  allTasks();
});
