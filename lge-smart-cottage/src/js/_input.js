document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.input-text');

  if (!inputs) return;

  inputs.forEach((input) => {
    const fieldContainer = input.closest('.field-container');
    const label = fieldContainer.querySelector('.field-label');
    const delBtn = fieldContainer.querySelector('.btn-delete');

    const updateVisibility = () => {
      const isVisible = input.value.length > 0 && !input.hasAttribute('readonly');
      label.toggleAttribute('hidden', !isVisible);
      delBtn.toggleAttribute('hidden', !isVisible);
    };

    // 키보드 감지
    input.addEventListener('keyup', updateVisibility);

    // 초기 상태 설정
    updateVisibility();

    // Readonly일 경우 label 항상 hidden 처리
    if (input.hasAttribute('readonly')) {
      label.setAttribute('hidden', '');
      delBtn.setAttribute('hidden', '');
    }

    // 삭제 버튼 클릭 이벤트
    delBtn.addEventListener('click', () => {
      input.value = '';
      label.setAttribute('hidden', '');
      delBtn.setAttribute('hidden', '');
    });
  });
});
