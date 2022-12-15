// Get the email input and error span elements
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('email-error');

      // Define a regular expression for valid email addresses
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      // Listen for changes to the email input
      emailInput.addEventListener('input', () => {
        // Hide the error message by default
        emailError.style.display = 'none';

        // Check if the email address is valid
        if (!emailRegex.test(emailInput.value)) {
          // If the email address is not valid, show the error message
          emailError.style.display = 'block';
        }
      });
   