document.addEventListener('DOMContentLoaded', () => {
    const gameUrl = 'Top-Down-drive/index.html';
    let logoClicks = 0;
    let speechTimeout;
    let clickResetTimeout;
    const unlockedGameLink = document.getElementById('lane-drop-unlocked');
    const terminal = document.getElementById('lane-terminal');
    const terminalClose = document.getElementById('terminal-close');

    if (localStorage.getItem('laneDropDiscovered') === 'true') {
        unlockedGameLink.classList.add('is-unlocked');
    }

    function showLogoMessage(logo, message) {
        const speechBubble = logo.parentElement.querySelector('.logo-speech');
        speechBubble.textContent = message;
        speechBubble.classList.add('is-visible');
        clearTimeout(speechTimeout);
        speechTimeout = setTimeout(() => {
            speechBubble.classList.remove('is-visible');
        }, 3500);
    }

    document.querySelectorAll('.logo img, .hero-logo img').forEach(logo => {
        logo.addEventListener('click', event => {
            event.preventDefault();
            logoClicks += 1;
            clearTimeout(clickResetTimeout);
            clickResetTimeout = setTimeout(() => {
                logoClicks = 0;
            }, 30000);

            if (logoClicks === 3) {
                showLogoMessage(logo, 'Why are you clicking that?');
            }

            if (logoClicks === 5) {
                showLogoMessage(logo, 'Seriously?');
            }

            if (logoClicks === 7) {
                showLogoMessage(logo, 'Fine. You found it.');
                localStorage.setItem('laneDropDiscovered', 'true');
                unlockedGameLink.classList.add('is-unlocked');
                terminal.classList.add('is-visible');
                logoClicks = 0;
            }
        });
    });

    terminalClose.addEventListener('click', () => {
        terminal.classList.remove('is-visible');
    });

    terminal.addEventListener('click', event => {
        if (event.target === terminal) {
            terminal.classList.remove('is-visible');
        }
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