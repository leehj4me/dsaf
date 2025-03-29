const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    Swal.fire({
      icon: 'success',
      title: '추가 완료!',
      text: '할 일이 리스트에 추가되었습니다.',
      timer: 1500,
      showConfirmButton: false
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: '할 일을 입력해주세요!',
      timer: 1500,
      showConfirmButton: false
    });
  }
});

function addTodo(text) {
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.textContent = text;

  const btnGroup = document.createElement('div');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '완료';
  completeBtn.className = 'btn btn-sm btn-primary me-2';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.className = 'btn btn-sm btn-danger';
  deleteBtn.onclick = () => {
    Swal.fire({
      title: '삭제하시겠어요?',
      text: '되돌릴 수 없습니다!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '삭제',
      cancelButtonText: '취소'
    }).then((result) => {
      if (result.isConfirmed) {
        li.remove();
        Swal.fire({
          icon: 'success',
          title: '삭제되었습니다',
          timer: 1200,
          showConfirmButton: false
        });
      }
    });
  };

  btnGroup.appendChild(completeBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);
  list.appendChild(li);
}
