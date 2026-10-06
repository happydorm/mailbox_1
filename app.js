const form = document.getElementById('mailForm');
const message = document.getElementById('message');
const count = document.getElementById('count');
const instagram = document.getElementById('instagram');
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

message.addEventListener('input', () => {
  count.textContent = message.value.length;
});

instagram.addEventListener('input', () => {
  instagram.value = instagram.value.replace(/^@+/, '').replace(/\s/g, '');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const id = instagram.value.trim();
  const text = message.value.trim();
  const agree = document.getElementById('privacyAgree').checked;

  if (!id) {
    instagram.focus();
    return;
  }
  if (!text) {
    message.focus();
    return;
  }
  if (!agree) {
    document.getElementById('privacyAgree').focus();
    return;
  }

  // 1차 시안: 실제 저장 기능은 Firebase 연결 단계에서 추가합니다.
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
});

function hideModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  form.reset();
  count.textContent = '0';
}

closeModal.addEventListener('click', hideModal);
modal.querySelector('.modal-dim').addEventListener('click', hideModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('show')) hideModal();
});
