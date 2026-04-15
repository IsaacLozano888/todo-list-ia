const input = document.getElementById('task-input');
const priority = document.getElementById('task-priority');
const button = document.getElementById('add-task-button');
const list = document.getElementById('task-list');
const completedList = document.getElementById('completed-tasks-list');

button.onclick = () => {
  const text = input.value.trim();

  if (!text) {
    alert('Digite uma tarefa');
    return;
  }

  const li = document.createElement('li');
  li.classList.add(priority.value);

  const span = document.createElement('span');
  span.textContent = text;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';

  // concluir tarefa
  completeBtn.onclick = () => {
    li.remove();

    const done = document.createElement('li');
    done.textContent = text;
    done.classList.add('completed');

    completedList.appendChild(done);
  };

  // deletar tarefa
  deleteBtn.onclick = () => li.remove();

  li.append(span, completeBtn, deleteBtn);
  list.appendChild(li);

  input.value = '';
};