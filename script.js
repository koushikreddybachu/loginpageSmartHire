// SmartHire AI – Recruiter Login (TCS)
// - Floating labels with JS-assisted has-value state (handles paste & autofill)
// - Client-side validation with animated error messages
// - Password show/hide toggle
//
// NOTE: For production, replace the external TCS logo URL in index.html
//       with a local asset path like: assets/tcs-logo.svg

(function () {
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const usernameError = document.getElementById('username-error');
  const passwordError = document.getElementById('password-error');
  const toggleBtn = document.querySelector('.toggle-password');

  // Utility: toggle .has-value based on content (supports paste/autofill)
  function updateHasValue(input) {
    const has = !!input.value && input.value.trim().length > 0;
    input.classList.toggle('has-value', has);
  }

  // Initialize has-value on load (handles autofill)
  [username, password].forEach((input) => {
    updateHasValue(input);
    ['input', 'change', 'blur'].forEach((evt) =>
      input.addEventListener(evt, () => updateHasValue(input))
    );
  });

  // Password show/hide
  if (toggleBtn && password) {
    toggleBtn.addEventListener('click', () => {
      const showing = toggleBtn.getAttribute('aria-pressed') === 'true';
      const nextState = !showing;
      toggleBtn.setAttribute('aria-pressed', String(nextState));
      if (nextState) {
        password.setAttribute('type', 'text');
        toggleBtn.setAttribute('aria-label', 'Hide password');
      } else {
        password.setAttribute('type', 'password');
        toggleBtn.setAttribute('aria-label', 'Show password');
      }
      // Maintain focus for accessibility
      password.focus({ preventScroll: true });
      // Move cursor to end (helpful when toggling)
      const val = password.value;
      password.value = '';
      password.value = val;
    });
  }

  // Validation helpers
  function showError(el, errorEl, message) {
    el.setAttribute('aria-invalid', 'true');
    errorEl.textContent = message;
    errorEl.classList.add('show');
  }

  function clearError(el, errorEl) {
    el.removeAttribute('aria-invalid');
    errorEl.textContent = '';
    errorEl.classList.remove('show');
  }

  function validateUsername() {
    const val = username.value.trim();
    if (val.length < 3) {
      showError(username, usernameError, 'Username must be at least 3 characters.');
      return false;
    }
    clearError(username, usernameError);
    return true;
  }

  function validatePassword() {
    const val = password.value;
    if (val.length < 6) {
      showError(password, passwordError, 'Password must be at least 6 characters.');
      return false;
    }
    clearError(password, passwordError);
    return true;
  }
// function validatePassword() {
//     // Rules:
//     // 1. At least 8 characters
//     // 2. At least one uppercase letter
//     // 3. At least one lowercase letter
//     // 4. At least one digit
//     // 5. At least one special character

//     const minLength = /.{8,}/;
//     const upperCase = /[A-Z]/;
//     const lowerCase = /[a-z]/;
//     const digit = /\d/;
//     const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

//     if (!minLength.test(password)) {
//         return "Password must be at least 8 characters long.";
//     }
//     if (!upperCase.test(password)) {
//         return "Password must contain at least one uppercase letter.";
//     }
//     if (!lowerCase.test(password)) {
//         return "Password must contain at least one lowercase letter.";
//     }
//     if (!digit.test(password)) {
//         return "Password must contain at least one digit.";
//     }
//     if (!specialChar.test(password)) {
//         return "Password must contain at least one special character.";
//     }
//     return "Password is valid!";
// }

// // Example usage:
// console.log(validatePassword("Pass@123")); // ✅ valid
// console.log(validatePassword("pass123"));  // ❌ missing uppercase & special


  // Live validation as user types
  //username.addEventListener('input', validateUsername);
  //password.addEventListener('input', validatePassword);

  // On submit: prevent default and validate
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const uOk = validateUsername();
    const pOk = validatePassword();
     window.location.href = "https://koushikreddybachuprojrct.lovable.app/review";
  });
})();