const form = document.getElementById('mailForm');
const message = document.getElementById('message');
const count = document.getElementById('count');
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

message.addEventListener('input', () => { count.textContent = message.value.length; });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // 1차 디자인/기능 시안. 실제 저장은 Firebase 연결 후 활성화합니다.
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  form.reset();
  count.textContent = '0';
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
});
