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

var glide01 = new Glide(".glide-01", {
  type: "carousel",
  focusAt: "center",
  perView: 3,
  autoplay: 3000,
  animationDuration: 700,
  gap: 24,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
});
glide01.mount();