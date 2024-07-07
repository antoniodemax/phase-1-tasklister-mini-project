document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Get a reference to the form element
const form = document.getElementById('create-task-form');

// Add an event listener to the form that listens for the submit event
form.addEventListener('submit', function(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // add reference to the input field
  const inputField = document.getElementById('new-task-description');

  //  value is added to the input field
  const taskDescription = inputField.value;

  //create new list item
  const listItem = document.createElement('li');

  // Set the text content of the list item to the task description
  listItem.textContent = taskDescription;

  // Get a reference to the task list element
  const taskList = document.getElementById('task-list');

  // Add the new list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  inputField.value = '';
});

