// const mobileMenuButton = document.getElementById("mobile-menu-button");
// const mobileMenu = document.querySelector(".mobile-menu");

// mobileMenuButton.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden");
// });

document.addEventListener("DOMContentLoaded", function() {
  var mobileMenuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');

  // Toggle mobile menu visibility
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicked outside of it
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});
// Close mobile menu when a menu item is clicked
var mobileMenuItems = document.querySelectorAll("#mobile-menu a");
mobileMenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

