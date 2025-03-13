// // Toggle the dropdown menu
// const menuIcon = document.getElementById('menu-icon');
// const navbar = document.getElementById('navbar');

// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// // Close the dropdown when clicking outside
// document.addEventListener('click', (event) => {
//     if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
//         navbar.classList.remove('active');
//     }
// });

// food.js
function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

// Close navbar when clicking outside
document.addEventListener("click", (event) => {
  const navbar = document.getElementById("navbar");
  const menuIcon = document.getElementById("menu-icon");

  if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
      navbar.classList.remove("active");
  }
});