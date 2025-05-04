document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu toggle functionality
  const menuToggleBtn = document.getElementById('menu-toggle');
  const menuNavigation = document.getElementById('menu-navigation');
  const navbarElement = document.querySelector('.navbar');
  
  // Function to toggle the menu
  function toggleMenu() {
    if (menuNavigation.style.display === 'none' || menuNavigation.style.display === '') {
      menuNavigation.style.display = 'block';
      document.querySelector('nav').classList.add('active');
    } else {
      menuNavigation.style.display = 'none';
      document.querySelector('nav').classList.remove('active');
    }
  }
  
  // Add event listener to menu toggle button for clicks
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleMenu);
  }
  
  // Add hover listeners for automatic menu display
  if (navbarElement && menuNavigation) {
    navbarElement.addEventListener('mouseenter', function() {
      menuNavigation.style.display = 'block';
      document.querySelector('nav').classList.add('active');
    });
    
    navbarElement.addEventListener('mouseleave', function() {
      // Add a small delay to make sure user isn't trying to click menu item
      setTimeout(function() {
        if (!navbarElement.matches(':hover')) {
          menuNavigation.style.display = 'none';
          document.querySelector('nav').classList.remove('active');
        }
      }, 300);
    });
  }
  
  // Set up product buttons (add to cart, etc.)
  function setupProductButtons() {
    const addButtons = document.querySelectorAll('.btn-ajouter');
    addButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        
        // Here you would typically add to cart functionality
        // For now, just show an alert
        alert(`Produit ajouté au panier! ID: ${productId}`);
      });
    });
  }
  
  // Initialize buttons
  setupProductButtons();
  
  // Initialize the hero carousel
  setupHeroCarousel();
});

// Carousel functionality
// Move carousel to show next/previous slide
function moveCarousel(category, direction) {
  const carouselWrapper = document.getElementById(`${category}-carousel`);
  const slides = carouselWrapper.querySelectorAll('.carousel-item');
  const dots = document.getElementById(`${category}-dots`).querySelectorAll('.dot');
  
  // Find current slide
  let currentIndex = 0;
  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      currentIndex = index;
    }
  });
  
  // Remove active class from current slide
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  // Calculate new index
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;
  
  // Activate new slide
  slides[newIndex].classList.add('active');
  dots[newIndex].classList.add('active');
}

// Jump to a specific slide
function jumpToSlide(category, index) {
  const carouselWrapper = document.getElementById(`${category}-carousel`);
  const slides = carouselWrapper.querySelectorAll('.carousel-item');
  const dots = document.getElementById(`${category}-dots`).querySelectorAll('.dot');
  
  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Activate the requested slide
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Show/hide category sections
function showCategory(category) {
  // Update active button state
  const filterButtons = document.querySelectorAll('.filtre-categorie button');
  filterButtons.forEach(button => {
    button.classList.remove('active');
    if (button.textContent.toLowerCase().includes(category)) {
      button.classList.add('active');
    }
  });
  
  // Show only selected category section
  const categorySections = document.querySelectorAll('.category-section');
  categorySections.forEach(section => {
    if (section.id === `${category}-section`) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Show all category sections
function showAllCategories() {
  // Update active button state
  const filterButtons = document.querySelectorAll('.filtre-categorie button');
  filterButtons.forEach(button => {
    button.classList.remove('active');
    if (button.textContent.includes('Tous')) {
      button.classList.add('active');
    }
  });
  
  // Show all category sections
  const categorySections = document.querySelectorAll('.category-section');
  categorySections.forEach(section => {
    section.style.display = 'block';
  });
}

// Hero slideshow functionality
function setupHeroCarousel() {
  const hero = document.getElementById("hero-section");
  if (!hero) return;

  const backgrounds = [
    "../Images/Diasporama/images4.jpg",
    "../Images/Diasporama/images6.jpg",
    "../Images/Diasporama/images5.jpg",
    "../Images/Diasporama/images12.jpg",
    "../Images/Diasporama/images8.jpg"
  ];

  let currentBg = 0;

  function changeBackground() {
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgrounds[currentBg]}')`;
    currentBg = (currentBg + 1) % backgrounds.length;
  }

  changeBackground(); // Start at loading
  setInterval(changeBackground, 10000); // Change every 10 seconds
}