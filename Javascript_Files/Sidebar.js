document.addEventListener("DOMContentLoaded", function() {
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-open');
    }

    function hideSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
    }

    const menuIcon = document.getElementById('menuIcon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleSidebar);
    } else {
        console.error("Element with ID 'menuIcon' not found.");
    }

    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                hideSidebar();
            }
        });
    } else {
        console.error("Element with ID 'sidebar' not found.");
    }
});
