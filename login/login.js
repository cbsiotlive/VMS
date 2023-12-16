$(document).ready(function () {
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();
        const username = $('#email').val();
        const password = $('#password').val();
        // Make an API request to check if the user's credentials match
        $.ajax({
            type: "POST",
            url: " ",//login url
            data: JSON.stringify({
                "operation": "read",
                "data": "user"
            }),
            dataType: 'json',
            success: function (response) {
                const user = response.find(u => u.user_id === username && u.password === password);
                if (user) {
                    // success url
                    window.location.href = " ";
                } else {
                    // Display an error message if credentials don't match
                    $('#error').text('Invalid user name or password');
                }
            },
            error: function () {
                $('#error').text('Error occurred during login');
            }
        });
    });
});