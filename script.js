// Countdown Timer
const countdownElement = document.getElementById('time');
const targetDate = new Date('September 17, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "The book cover is revealed!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Handle Form Submission
const form = document.getElementById('newsletter-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Store data in local storage (to be replaced with backend integration)
    const user = { name, email, phone };
    let users = JSON.parse(localStorage.getItem('newsletterUsers')) || [];
    users.push(user);
    localStorage.setItem('newsletterUsers', JSON.stringify(users));

    alert('Thank you for joining the newsletter!');
    form.reset();
});
