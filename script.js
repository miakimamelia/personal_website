var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];

// Variables to store mouse positions
var offsetX, offsetY;
var isDragging = false;

// Function to handle mouse down event
function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // Get the initial mouse cursor position when the mouse button is pressed down
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    // Set the dragging flag to true
    isDragging = true;
}

// Function to handle mouse up event
function closeDragElement() {
    // Reset the dragging flag to false when the mouse button is released
    isDragging = false;
}

// Function to handle mouse move event
function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    if (isDragging) {
        // Calculate the new cursor position
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;
        // Set the new modal position
        modal.style.left = x + 'px';
        modal.style.top = y + 'px';
    }
}

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Attach event listeners for dragging
modal.onmousedown = dragMouseDown;
document.onmouseup = closeDragElement;
document.onmousemove = elementDrag;
