document.addEventListener('DOMContentLoaded', function () {

  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');  // The button to add tasks
  const taskInput = document.getElementById('task-input');  // The input field for tasks
  const taskList = document.getElementById('task-list');    // The ul element where tasks will be displayed

  // Step 2: Load tasks from Local Storage and display them
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Retrieve tasks from Local Storage, or use an empty array if not found

  function loadTasks() {
      taskList.innerHTML = '';  // Clear the list before reloading
      tasks.forEach(task => {
          const taskItem = document.createElement('li');
          taskItem.textContent = task.text;

          const removeButton = document.createElement('button');
          removeButton.textContent = "Remove";
          removeButton.classList.add('remove-btn');
          removeButton.onclick = function () {
              removeTask(taskItem, task);
          };

          taskItem.appendChild(removeButton);
          taskList.appendChild(taskItem);
      });
  }

  // Call loadTasks on page load to display existing tasks
  loadTasks();

  // Step 3: Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
          alert("Please enter a task.");
      } else {
          // Create a new task object
          const newTask = { text: taskText };
          tasks.push(newTask);  // Add the task to the tasks array

          // Step 4: Create task element and remove button
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;

          const removeButton = document.createElement('button');
          removeButton.textContent = "Remove";
          removeButton.classList.add('remove-btn');
          removeButton.onclick = function () {
              removeTask(taskItem, newTask);
          };

          taskItem.appendChild(removeButton);
          taskList.appendChild(taskItem);

          // Step 5: Update Local Storage
          localStorage.setItem('tasks', JSON.stringify(tasks));

          taskInput.value = '';  // Clear input field
      }
  }

  // Step 6: Function to remove a task
  function removeTask(taskItem, task) {
      taskItem.remove();  // Remove task element from the DOM
      tasks = tasks.filter(t => t !== task);  // Remove the task from the tasks array

      // Step 7: Update Local Storage after task removal
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Step 8: Attach event listeners
  addButton.addEventListener('click', addTask);  // Add task on button click

  taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          addTask();  // Add task on Enter key press
      }
  });

});
