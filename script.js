// Function to show modal on page load
window.onload = function () {
    // Get the modal, iframe, and close button
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.getElementById('closeModal');
    var iframe = document.getElementById('modalIframe');

    // Show the modal
    modal.style.display = 'block';

    // Set iframe source when modal is displayed
    iframe.src = "/splash/index.html";

    // Close the modal when the close button is clicked
    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Close the modal if the user clicks outside of it
    document.getElementById('enterButton').onclick = function () {
        modal.style.display = 'none';
    };
};

