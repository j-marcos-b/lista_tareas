const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

addTaskBtn.addEventListener('click', () => {
  const taskTest = taskInput.value.trim();

  if (taskTest !== '') {
    const li = document.createElement('li');
    li.textContent = taskTest;
    li.classList = 'item'

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList = 'delete-btn';

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';

    deleteBtn.addEventListener('click', () => {
      li.remove();
    })
    
  } else {
    alert('Ingrese una tarea');
  }
})
