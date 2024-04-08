function handlePasswordFocus() {
    var passwordInput = document.getElementById('password');
    var placeholderText = '(6+ characters)';
    
    // Check if input field is empty
    if (passwordInput.value === '') {
        // If empty, set placeholder text
        passwordInput.value = placeholderText;
        // Apply styles to mimic placeholder behavior
        passwordInput.style.color = 'gray'; // Placeholder text color
    } else if (passwordInput.value === placeholderText) {
        // If already displaying placeholder text, do nothing
        return;
    }
    
    // Add event listener to remove placeholder text when user starts typing
    passwordInput.addEventListener('input', function() {
        if (passwordInput.value === placeholderText) {
            passwordInput.value = '';
            passwordInput.style.color = 'black'; // Restore regular text color
        }
    });
    
    // Add event listener to restore placeholder text if input field becomes empty again
    passwordInput.addEventListener('blur', function() {
        if (passwordInput.value === '') {
            passwordInput.value = placeholderText;
            passwordInput.style.color = 'gray'; // Placeholder text color
        }
    });
}
