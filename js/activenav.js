      // Add active class to the current button (highlight it)
      var header = document.getElementById("nav-menu-container");
      var btns = header.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
      }


      // Add active class to the current button when scrolled to sections
     
      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.btn');
      
        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight - sectionHeight / 3) {
            navItems.forEach((navItem) => {
              navItem.classList.remove('active');
            });
            navItems[index].classList.add('active');
          }
        });
      });

      