// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {

  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');  // The button to add tasks
  const taskInput = document.getElementById('task-input');  // The input field for tasks
  const taskList = document.getElementById('task-list');    // The ul element where tasks will be displayed

  // Step 2: Function to add a new task to the list
  function addTask() {
      // Get the task text from the input and trim any excess spaces
      const taskText = taskInput.value.trim();

      // Check if the task text is not empty
      if (taskText === "") {
          // If empty, alert the user
          alert("Please enter a task.");
      } else {
          // Step 3: Create a new li element for the task
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;

          // Step 4: Create a remove button for the task
          const removeButton = document.createElement('button');
          removeButton.textContent = "Remove";
          removeButton.classList.add('remove-btn');

          // Add an event listener to the remove button
          removeButton.onclick = function() {
              taskItem.remove();  // Remove the task from the list
          };

          // Step 5: Append the remove button to the task item
          taskItem.appendChild(removeButton);

          // Step 6: Append the task item to the task list
          taskList.appendChild(taskItem);

          // Step 7: Clear the task input field
          taskInput.value = '';
      }
  }

  // Step 8: Attach event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Step 9: Attach event listener to the input field to allow task addition via Enter key
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();  // Call addTask when Enter key is pressed
      }
  });

});
