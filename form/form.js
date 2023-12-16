let toggleDiv = function () {
    let div = document.getElementById('hiddenDiv');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}


let verifyOTP = function () {
    let enteredOTP = document.getElementById('VerifyOTP').value;
    let errorDiv = document.getElementById('errorDiv');
    let successDiv = document.getElementById('successDiv');
    let hiddenDiv = document.getElementById('hiddenDiv');
    let showSubmit = document.getElementById('showSubmit');
    let hideGetOTPbtn = document.getElementById('hideGetOTPbtn');

    var otp = 1234;
    if (enteredOTP == otp) {
        // Show success div and hide error div
        successDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        hiddenDiv.style.display = 'none'; // Hide the entire hiddenDiv
        showSubmit.style.display = 'block';
        hideGetOTPbtn.style.display = 'none'; // Hide the entire hiddenDiv
    } else {
        // Show error div and hide success div
        successDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        hiddenDiv.style.display = 'block'; // Show the entire hiddenDiv
    }

    // Optionally, you can reset the input field after verification
    document.getElementById('VerifyOTP').value = '';
}




let showAdditionalFields = function () {
    let userType = document.getElementById('userType').value;
    let employeeFields = document.getElementById('employeeFields');
    let govOthCorpFields = document.getElementById('govOthCorpFields');
    // Reset the fields
    employeeFields.style.display = 'none';
    govOthCorpFields.style.display = 'none';

    // Show fields based on the selected user type
    if (userType === 'emp') {
        employeeFields.style.display = 'block';
    } else {
        govOthCorpFields.style.display = 'block';
    }
}

let submitForm = function () {
    // Simulate form submission logic
    // You should replace this with your actual form submission logic
    alert('Form submitted successfully!');
}