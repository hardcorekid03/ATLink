document.addEventListener("DOMContentLoaded", function() {
// Get all the links with an ID starting with '#'
const links = document.querySelectorAll("a[href^='#']");

// Iterate over each link
links.forEach(link => {
  // Add click event listener
  link.addEventListener("click", function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Get the target element by its ID from the href attribute
      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      // Calculate the offset from the top of the target element
      const offset = targetElement.getBoundingClientRect().top;

      // Smooth scroll animation
      window.scrollTo({
          top: offset + window.scrollY,
          behavior: "smooth"
      });
  });
});
});
