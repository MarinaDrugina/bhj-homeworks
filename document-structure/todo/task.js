const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (tasksInput.value.trim() !== '') {
    let elem = `<div class="task">
                  <div class="task__title">${tasksInput.value}</div>
                  <a href="#" class="task__remove">&times;</a>
                </div>`;
    
    tasksList.insertAdjacentHTML('beforeEnd', elem);

    tasksList.lastElementChild.lastElementChild.addEventListener('click', (event) => {
        event.preventDefault();
        event.currentTarget.parentNode.remove();
    });

    tasksInput.value = '';
   }
});