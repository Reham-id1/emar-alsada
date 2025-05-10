
document.addEventListener('DOMContentLoaded', function () {
    const serversInput = document.getElementById('servers');
    const storedservers = localStorage.getItem('selectedService');
    if (storedservers) {
        serversInput.value = storedservers;
    }
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phoneNumber').value;
    const servers = document.getElementById('servers').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;

    const message = `مرحباً، أود تأكيد الحجز:\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالخدمة: ${servers}\nالمكان: ${location}\nالتاريخ: ${date}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});
