document.addEventListener("DOMContentLoaded", function() {
    const newsletterPopup = document.getElementById("newsletterPopup");
    const closeButton = document.getElementById("closeButton");
    const subscribeButton = document.getElementById("subscribeButton");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const confirmationMessage = document.getElementById("confirmationMessage");

    function showPopup() {
        newsletterPopup.style.display = "block";
    }

    closeButton.addEventListener("click", function() {
        newsletterPopup.style.display = "none"; 
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    subscribeButton.addEventListener("click", function() {
        const email = emailInput.value;

        if (validateEmail(email)) {
            errorMessage.style.display = "none";
            confirmationMessage.style.display = "block";
        } else {
            confirmationMessage.style.display = "none";
            errorMessage.style.display = "block";

            setTimeout(function() {
                errorMessage.style.display = "none";
            }, 3000);
        }
    });

    setTimeout(showPopup, 800); 
});
