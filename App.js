let swiper = new Swiper('.mySwiper', {
    effect: 'fade',
    loop: true,             
    autoplay: {
        delay: 2000,     
        disableOnInteraction: false, 
    },
    fadeEffect: {
        crossFade: true,  
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//     document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
        var menuToggleButton = document.querySelector('.custom-navbar-toggler');
        var navbarCollapse = document.querySelector('.custom-navbar-collapse');

        menuToggleButton.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                // Smoothly close the menu
                navbarCollapse.classList.remove('show');
                // Optionally set max-height to 0 manually after transition
                navbarCollapse.style.maxHeight = '0';
            } else {
                // Smoothly open the menu
                navbarCollapse.classList.add('show');
                // Set max-height to a value that fits your content
                navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Get the dropdown elements
        const civilDropdown = document.getElementById("civilDropdown");
        const civilMenu = civilDropdown.nextElementSibling;
        const defenseDropdown = document.getElementById("defenseDropdown");
        const defenseMenu = defenseDropdown.nextElementSibling;
    
        // Function to show the dropdown
        function showDropdown(dropdown, menu) {
            dropdown.classList.add("show");
            menu.classList.add("show");
        }
    
        // Function to hide the dropdown
        function hideDropdown(dropdown, menu) {
            dropdown.classList.remove("show");
            menu.classList.remove("show");
        }
    
        // Civil dropdown events
        civilDropdown.addEventListener("mouseenter", function () {
            showDropdown(civilDropdown, civilMenu);
        });
        civilDropdown.addEventListener("mouseleave", function (e) {
            if (!civilMenu.contains(e.relatedTarget)) {
                hideDropdown(civilDropdown, civilMenu);
            }
        });
        civilMenu.addEventListener("mouseleave", function (e) {
            if (!civilDropdown.contains(e.relatedTarget)) {
                hideDropdown(civilDropdown, civilMenu);
            }
        });
    
        // Defense dropdown events
        defenseDropdown.addEventListener("mouseenter", function () {
            showDropdown(defenseDropdown, defenseMenu);
        });
        defenseDropdown.addEventListener("mouseleave", function (e) {
            if (!defenseMenu.contains(e.relatedTarget)) {
                hideDropdown(defenseDropdown, defenseMenu);
            }
        });
        defenseMenu.addEventListener("mouseleave", function (e) {
            if (!defenseDropdown.contains(e.relatedTarget)) {
                hideDropdown(defenseDropdown, defenseMenu);
            }
        });
    });