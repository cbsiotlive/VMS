
// ------------------------side ber----------------------------------
const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});


$(document).ready(function () {
    $(".dashboard-nav-item").click(function () {
        // Remove the "active" class from all items
        $(".dashboard-nav-item").removeClass("active");

        // Add the "active" class to the clicked item
        $(this).addClass("active");
    });
});
// ------------------------side ber End----------------------------------

// ------------------------drop down----------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Show the default selected option
    toggleDiv();
});

function toggleDiv() {
    var userType = document.getElementById("userType").value;

    // Hide all divs
    document.getElementById("userDiv").classList.add("hidden");
    document.getElementById("gateManDiv").classList.add("hidden");

    // Show the selected div
    document.getElementById(userType + "Div").classList.remove("hidden");
}

// ------------------------drop down End----------------------------------

// ------------------------edit----------------------------------
function editRow(rowId) {
    // Get the row
    var row = document.querySelector('tbody tr');

    // Toggle visibility of text and input elements
    var textElements = row.querySelectorAll('.editable-text');
    var inputElements = row.querySelectorAll('.editable-input');

    textElements.forEach(function (element) {
        element.style.display = 'none';
    });

    inputElements.forEach(function (element) {
        element.style.display = 'inline';
    });

    // Toggle visibility of Edit and Save links
    var editLink = row.querySelector('a[href="#"][onclick="editRow(1)"]');
    var saveLink = row.querySelector('a[href="#"][onclick="saveRow(1)"]');

    editLink.style.display = 'none';
    saveLink.style.display = 'inline';

    // Focus on the first input element
    inputElements[0].focus();
}

function saveRow(rowId) {
    // Get the row
    var row = document.querySelector('tbody tr');

    // Toggle visibility of text and input elements
    var textElements = row.querySelectorAll('.editable-text');
    var inputElements = row.querySelectorAll('.editable-input');

    textElements.forEach(function (element, index) {
        element.style.display = 'inline';
        element.textContent = inputElements[index].value;
    });

    inputElements.forEach(function (element) {
        element.style.display = 'none';
    });

    // Toggle visibility of Edit and Save links
    var editLink = row.querySelector('a[href="#"][onclick="editRow(1)"]');
    var saveLink = row.querySelector('a[href="#"][onclick="saveRow(1)"]');

    editLink.style.display = 'inline';
    saveLink.style.display = 'none';
}

function deleteRow(rowId) {
    // Implement your delete logic here
    alert("Deleting row " + rowId);
}
