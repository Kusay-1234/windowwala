
  document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission or page refresh
    const emailInput = document.querySelector('.info input[type="email"]');
    const emailValue = emailInput.value.trim();
    const errorMessage = document.querySelector('.error-message');

   
    if (!validateEmail(emailValue)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for subscribing!');

      // Send email to backend using fetch
      fetch('/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailValue })
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you for subscribing!'); // Success message
        } else {
          alert('There was a problem sending the email.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
      });
    }
  });

