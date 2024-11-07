document.addEventListener("DOMContentLoaded", function() {
  // Function to toggle the visibility of the sidebar
  function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('mainContent');

      // Toggle sidebar visibility
      sidebar.classList.toggle('active');
      mainContent.classList.toggle('sidebar-open');
  }

  // Function to hide the sidebar when a link is clicked
  function hideSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.remove('active');
  }

  // Ensure menuIcon exists before adding the event listener
  const menuIcon = document.getElementById('menuIcon');
  if (menuIcon) {
      // Event listener for the hamburger menu
      menuIcon.addEventListener('click', toggleSidebar);
  } else {
      console.error("Element with ID 'menuIcon' not found.");
  }

  // Ensure sidebar exists before adding the event listener
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
      // Event delegation for sidebar links
      sidebar.addEventListener('click', (event) => {
          if (event.target.tagName === 'A') {
              hideSidebar();
          }
      });
  } else {
      console.error("Element with ID 'sidebar' not found.");
  }
});
