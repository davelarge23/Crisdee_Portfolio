document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const contentArea = document.getElementById("content");
    const overlay = document.querySelector(".overlay");
    const defaultPage = "pages/home.html";  // Set the default page to load

    // Function to load page asynchronously with overlay transition
    function loadPage(page, link = null) {
        // Show overlay to start the transition
        overlay.classList.remove('hide');
        overlay.classList.add('show');
        

        // Wait for the overlay to fully cover the content before changing it
        setTimeout(() => {
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    // Load the fetched content into the content area
                    contentArea.innerHTML = data;

                    // Hide the overlay after loading new content
                    overlay.classList.remove('show');
                    overlay.classList.add('hide');
                    // If a link is provided, update the active class on the navbar
                    if (link) {
                        navLinks.forEach(link => link.classList.remove("active")); // Remove active from all
                        link.classList.add("active"); // Add active to the clicked link
                    }

                    // Reinitialize event listeners for mobile nav links inside the fetched content
                    initializeMobileNavLinks();
                    
                })
                .catch(error => {
                    contentArea.innerHTML = "<p>Failed to load content. Please try again later.</p>";
                    console.error("Error loading page:", error);
                });
        }, 700); // Wait for the overlay to cover before loading new content
        
    }

    // Function to initialize mobile nav links after loading new content
    function initializeMobileNavLinks() {
        const mobileNavLinks = document.querySelectorAll(".navbar_mobile .nav-link");

        mobileNavLinks.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default anchor behavior
                const page = link.getAttribute("data-href");
                loadPage(page, link); // Load the clicked page asynchronously
            });
        });
    }

    // Load the default page when the website first loads
    loadPage(defaultPage);

    // Add event listeners to web nav links for asynchronous page loading with transition
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const page = link.getAttribute("data-href");
            loadPage(page, link); // Load the clicked page asynchronously
        });
    });

    // Call this function once to attach event listeners to mobile nav links on initial load
    initializeMobileNavLinks();
});


function expand_details_ach1(){
    var desc_div = document.getElementById('description_ach');
    var collapseBtn_ach1 = document.getElementById('collapseButton_ach1');
    var expandButton_ach1 = document.getElementById('expandButton_ach1');
    
    desc_div.classList.add('expand');
    expandButton_ach1.style.display = 'none';
    collapseBtn_ach1.style.display = 'flex';
}

function collapse_details_ach1(){
    var desc_div = document.getElementById('description_ach');
    var collapseBtn_ach1 = document.getElementById('collapseButton_ach1');
    var expandButton_ach1 = document.getElementById('expandButton_ach1');
    
    desc_div.classList.remove('expand');
    expandButton_ach1.style.display = 'flex';
    collapseBtn_ach1.style.display = 'none';
}

function expand_details_ach2(){
    var desc_div = document.getElementById('description_ach2');
    var collapseBtn_ach2 = document.getElementById('collapseButton_ach2');
    var expandButton_ach2 = document.getElementById('expandButton_ach2');
    
    desc_div.classList.add('expand');
    expandButton_ach2.style.display = 'none';
    collapseBtn_ach2.style.display = 'flex';
}

function collapse_details_ach2(){
    var desc_div = document.getElementById('description_ach2');
    var collapseBtn_ach2 = document.getElementById('collapseButton_ach2');
    var expandButton_ach2 = document.getElementById('expandButton_ach2');
    
    desc_div.classList.remove('expand');
    expandButton_ach2.style.display = 'flex';
    collapseBtn_ach2.style.display = 'none';
}
