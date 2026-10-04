const list = document.querySelector('#users-list');
const feedback = document.querySelector('#feedback');
const tableWrap = document.querySelector('#table-wrap');
const resultCount = document.querySelector('#result-count');
const refreshButton = document.querySelector('#refresh-button');

function initials(name) {
  return (name || '?')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

async function loadUsers() {
  refreshButton.disabled = true;
  feedback.hidden = false;
  feedback.className = 'feedback';
  feedback.innerHTML = '<span class="loader" aria-hidden="true"></span><span>Cargando el directorio…</span>';
  tableWrap.hidden = true;

  try {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error('No se pudo consultar el servicio.');

    const users = await response.json();
    list.replaceChildren();

    for (const user of users) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const identity = document.createElement('div');
      const avatar = document.createElement('span');
      const name = document.createElement('span');
      const emailCell = document.createElement('td');
      const email = document.createElement('a');
      const idCell = document.createElement('td');
      const id = document.createElement('span');

      identity.className = 'identity';
      avatar.className = 'avatar';
      avatar.textContent = initials(user.name);
      name.className = 'name';
      name.textContent = user.name || 'Sin nombre';
      identity.append(avatar, name);
      nameCell.append(identity);
      email.className = 'email';
      email.href = `mailto:${user.email || ''}`;
      email.textContent = user.email || 'Sin correo';
      emailCell.append(email);
      id.className = 'user-id';
      id.textContent = `#${user.id}`;
      idCell.append(id);
      row.append(nameCell, emailCell, idCell);
      list.append(row);
    }

    resultCount.textContent = `${users.length} ${users.length === 1 ? 'usuario registrado' : 'usuarios registrados'}`;
    feedback.hidden = users.length > 0;
    if (users.length === 0) {
      feedback.className = 'feedback empty';
      feedback.textContent = 'Todavía no hay usuarios registrados.';
    }
    tableWrap.hidden = users.length === 0;
  } catch (error) {
    resultCount.textContent = 'No se pudo cargar el directorio';
    feedback.className = 'feedback error';
    feedback.textContent = `${error.message} Comprueba que los servicios estén activos e inténtalo de nuevo.`;
    feedback.hidden = false;
  } finally {
    refreshButton.disabled = false;
  }
}

refreshButton.addEventListener('click', loadUsers);
loadUsers();
