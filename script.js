// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".modal .close");

const projects = {
    1: {
        name: "Project Name 1",
        description: "This is a more detailed description of Project 1.",
        link: "https://github.com/octyn-yt/project1"
    },
    2: {
        name: "Project Name 2",
        description: "This is a more detailed description of Project 2.",
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

// Close modal when clicking the "x"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
