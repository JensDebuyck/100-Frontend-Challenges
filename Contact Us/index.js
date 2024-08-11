// Add your JavaScript here.
document.querySelector('form').addEventListener('submit', function(event) {
    let isValid = true;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const contactMethod = document.querySelector('input[name="contact_method"]:checked');
    
    if (!name || !email || !message || !contactMethod) {
        isValid = false;
        alert("Please fill in all required fields.");
    }
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        alert("Please enter a valid email address.");
    }
    
    if (!isValid) {
        event.preventDefault();
    }
});

document.querySelectorAll('input[name="contact_method"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const phoneInput = document.querySelector('input[name="phone"]');
        if (radio.value === 'phone') {
            phoneInput.setAttribute('required', 'required');
        } else {
            phoneInput.removeAttribute('required');
        }
    });
});

document.querySelectorAll('.radio-group label').forEach(function(label) {
    label.addEventListener('click', function() {
        document.querySelectorAll('.radio-group label').forEach(function(label) {
            label.style.backgroundColor = ''; // Reset
        });
        label.style.backgroundColor = '#f0f0f0'; // Highlight the selected one
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple fade out effect on form submit
    const form = this;
    form.style.opacity = 1;
    
    const fadeOut = setInterval(function() {
        if (form.style.opacity > 0) {
            form.style.opacity -= 0.05;
        } else {
            clearInterval(fadeOut);
            form.submit();
        }
    }, 50);
});

