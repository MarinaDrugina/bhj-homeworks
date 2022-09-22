const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

tasksInput.addEventListener('keyup', (event) => {
  event.preventDefault();

  if (event.code === 'Enter' && tasksInput.value !== '') {

    let elem = `<div class="task">
                  <div class="task__title">${tasksInput.value}</div>
                  <a href="#" class="task__remove">&times;</a>
                </div>`;
    tasksList.insertAdjacentHTML('beforeEnd', elem);

    tasksList.lastElementChild.lastElementChild.addEventListener('click', (event) => {
        event.preventDefault();
        event.currentTarget.parentNode.remove();
      })

    tasksInput.value = '';
  }
});