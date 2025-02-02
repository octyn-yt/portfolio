// Custom Cursor Movement
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Move cursor with mouse movement
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Change cursor size when hovering over buttons or links
const hoverElements = document.querySelectorAll("a, button");
hoverElements.forEach((el) => {
    el.addEventListener("mouseover", () => {
        cursor.style.width = "30px"; // Increase size on hover
        cursor.style.height = "30px";
    });
    el.addEventListener("mouseout", () => {
        cursor.style.width = "20px"; // Reset to default size
        cursor.style.height = "20px";
    });
});

// Smooth Scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for Project Details
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".modal .close");

const projects = {
    1: {
        name: "Project Name 1",
        description: "This is a more detailed description of Project 1. It might include tech stack, features, and a GitHub repository link.",
        link: "https://github.com/octyn-yt/project1"
    },
    2: {
        name: "Project Name 2",
        description: "This is a more detailed description of Project 2. It might also include a link to the live demo or GitHub repository.",
        link: "https://github.com/octyn-yt/project2"
    }
    // Add more projects as needed
};

// Open modal with project details
document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", function() {
        const projectId = this.closest(".project-item").getAttribute("data-project-id");
        const project = projects[projectId];
        
        document.getElementById("modal-description").textContent = project.description;
        document.getElementById("modal-link").href = project.link;
        
        modal.style.display = "block";
    });
});

// Close modal when clicking the "x" or outside of the modal content
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
