
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
var $locationText = $(".location");

// Check for geolocation browser support and execute success method
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    geoLocationSuccess,
    geoLocationError,
    { timeout: 10000 }
  );
} else {
  alert("Your browser doesn't support geolocation");
}

function geoLocationSuccess(pos) {
  // Get user lat,long
  var myLat = pos.coords.latitude,
    myLng = pos.coords.longitude,
    loadingTimeout;

  var loading = function () {
    $locationText.text("Fetching...");
  };

  loadingTimeout = setTimeout(loading, 600);

  $.ajax({
    url: "https://nominatim.openstreetmap.org/reverse",
    data: {
      format: "json",
      lat: myLat,
      lon: myLng,
    },
    success: function (data) {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
        loadingTimeout = null;
        $locationText.text(data.display_name);
        console.log("User Location:", data);
      }
    },
    error: function () {
      // Handle error
    },
  });
}

function geoLocationError(error) {
  var errors = {
    1: "Permission denied",
    2: "Position unavailable",
    3: "Request timeout",
  };
  alert("Error: " + errors[error.code]);
}
