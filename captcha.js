document.getElementById("terms").addEventListener("change", function() {
    if (this.checked) {
        // Display CAPTCHA
        alert("Please solve the CAPTCHA to continue.");
    }
});
