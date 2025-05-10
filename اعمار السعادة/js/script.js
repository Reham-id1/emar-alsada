document.addEventListener('DOMContentLoaded', () => {
  const bookingForm = document.getElementById('bookingForm');
  const contactForm = document.getElementById('contactForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('تم إرسال طلب الحجز بنجاح!');
      bookingForm.reset();
    });
  }
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('تم إرسال رسالتك بنجاح!');
      contactForm.reset();
    });
  }
});
