// Toggle mobile menu visibility
  document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  // Close mobile menu when a menu item is clicked
  var mobileMenuItems = document.querySelectorAll('#mobile-menu a');
  mobileMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });
