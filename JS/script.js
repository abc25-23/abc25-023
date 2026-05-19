// This runs when the page is fully loaded
window.onload = function() {
    console.log("Tsholo's Kitchen website loaded successfully!");
};

// Function for Reservation Confirmation
function confirmBooking() {
    alert("Thank you for choosing Tsholo's Kitchen! Your reservation request has been received.");
}

// Function for Feedback Validation
function validateFeedback() {
    let comment = document.getElementById("comments").value;
    if (comment.length < 5) {
        alert("Please write a bit more about your experience!");
        return false;
    }
    alert("Thank you for your feedback!");
    return true;
console.log("Script.js is working correctly!");
