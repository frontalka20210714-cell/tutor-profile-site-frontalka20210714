document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject) {
      status.textContent = 'Пожалуйста, заполните все обязательные поля.';
      status.style.color = '#b91c1c';
      return;
    }

    const mailtoLink = `mailto:tarasov.dionis@example.com?subject=${encodeURIComponent(
      'Запись на урок: ' + subject
    )}&body=${encodeURIComponent(
      `Имя: ${name}\nEmail: ${email}\nПредмет: ${subject}\n\nЦель: ${message || 'Не указана'}\n\nПожалуйста, свяжитесь со мной для согласования времени урока.`
    )}`;

    status.textContent = 'Заявка готова. Открывается почтовый клиент для отправки.';
    status.style.color = '#0f766e';

    window.location.href = mailtoLink;
    form.reset();
  });
});
