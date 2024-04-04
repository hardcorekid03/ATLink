const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

  // Close mobile menu when a menu item is clicked
  var mobileMenuItems = document.querySelectorAll('#mobile-menu a');
  mobileMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });
