document.getElementById("create-account-btn").addEventListener("click", function() {
    var checkBox = document.getElementById("terms");
    if (!checkBox.checked) {
        alert("Please tick the checkbox to create an account.");
        return;
    }
    // If checkbox is checked, submit the form
    document.getElementById("signup-form").submit();
});
