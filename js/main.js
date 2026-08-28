document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'https://raw.githack.com/NotMuchBytes/Top-Down-drive/4f89ee62edfd75dc7af7020b47cda103e47a8f90/index.html';
    let logoClicks = 0;

    document.querySelectorAll('.logo img, .hero-logo img').forEach(logo => {
        logo.addEventListener('click', event => {
            event.preventDefault();
            logoClicks += 1;

            if (logoClicks === 3) {
                const speechBubble = logo.parentElement.querySelector('.logo-speech');
                speechBubble.textContent = 'ok let me take you home';
                speechBubble.classList.add('is-visible');
            }

            if (logoClicks === 5) {
                window.open(gameUrl, '_blank', 'noopener');
                logoClicks = 0;
            }
        });
    });

    const projectsContainer = document.getElementById('projects-container');
    const projectsData = []; // This will be populated from data/projects.js

    // Function to create project cards
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('project-card');

        const title = document.createElement('h3');
        title.textContent = project.name;

        const description = document.createElement('p');
        description.textContent = project.description;

        const tech = document.createElement('p');
        tech.textContent = `Technologies: ${project.technologies.join(', ')}`;

        const status = document.createElement('p');
        status.textContent = `Status: ${project.status}`;

        const link = document.createElement('a');
        link.href = project.githubLink;
        link.textContent = 'View on GitHub';
        link.classList.add('project-link');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tech);
        card.appendChild(status);
        card.appendChild(link);

        return card;
    }

    // Function to load projects dynamically
    function loadProjects() {
        projectsData.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    }

    // Initialize the portfolio
    loadProjects();

    // Add event listeners for buttons
    const discordButton = document.getElementById('discord-button');
    if (discordButton) {
        discordButton.addEventListener('click', () => {
            window.open('https://discord.com/invite/yourdiscordlink', '_blank');
        });
    }

    const githubButton = document.getElementById('github-button');
    if (githubButton) {
        githubButton.addEventListener('click', () => {
            window.open('https://github.com/NotMuchBytes', '_blank');
        });
    }
});