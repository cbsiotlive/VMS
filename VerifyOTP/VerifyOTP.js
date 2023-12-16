let digitValidate = function (ele) {
  ele.value = ele.value.replace(/[^0-9]/g, '');
}

let tabChange = function (val) {
  let ele = document.querySelectorAll('input');
  if (ele[val - 1].value !== '') {
    ele[val].focus();
  } else if (ele[val - 1].value === '' && val > 1) {
    ele[val - 2].focus();
  }
}

let verifyOTP = function () {
  let enteredOTP = '';
  document.querySelectorAll('.otp').forEach(function (input) {
    enteredOTP += input.value;
  });

  var otp = 123456;

  if (enteredOTP == otp) {
    // OTP is valid, open the URL
    window.location.href = 'http://cbsiot.live/utkarsh/updateapi.php';
  } else {
    // Invalid OTP, display a message or take appropriate action
    alert('Invalid OTP. Please try again.');
    // $('#error').text('Invalid OTP. Please try again.');

  }
};

// Add event listener to the Verify button
document.querySelector('.customBtn').addEventListener('click', verifyOTP);
