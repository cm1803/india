// Custom JavaScript
$(document).ready(function() {
    // Function to update the time input based on the selected date
    function updateDateTime() {
        let date = $('#date').val();
        $('#time').attr('min', `${date}T00:00`);
        $('#time').attr('max', `${date}T23:59`);
    }

    // Call the function on page load
    updateDateTime();

    // Call the function whenever the date input changes
    $('#date').change(updateDateTime);

    // Submit event listener for the form
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        let formData = $(this).serializeArray();
        console.log(formData);
    });
});
