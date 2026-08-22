# Sahil's Digital Canvas

Build a modern, professional developer portfolio website for a full-stack developer and AI/ML enthusiast. Single-page site with smooth scroll navigation between sections. Clean, minimal, dark-mode-first design with subtle accent color (deep blue or teal), good whitespace, and a technical/engineering feel — not generic template look. Use a modern sans-serif font (e.g. Inter or Space Grotesk). Add subtle scroll-reveal animations on section entry and smooth hover states on cards/buttons.

SECTIONS:

1. HERO

- Name: Sahil Sonekar

- Tagline: "Full-Stack Developer | Building AI-Powered Web Applications"

- Short subtext: MCA student at VJTI Mumbai, passionate about backend engineering and integrating LLMs into real products

- Buttons: "View Projects" (scrolls to projects), "Resume" (placeholder link), "Contact Me" (scrolls to contact)

- Social icons: GitHub (https://github.com/SahilSonekar), LinkedIn (https://www.linkedin.com/in/sahil-sonekar-837a7725b/), Email

2. ABOUT

- MCA student at Veermata Jijabai Technological Institute (VJTI), Mumbai — Aug 2025 to Present

- Bachelor of Commerce in Computer Applications (BCCA), Tirpude Institute of Education Management, Nagpur — Aug 2022 to May 2025

- Scored 98.92 percentile in MAH MCA CET 2025, a state-level entrance exam

- Short narrative paragraph: enjoys building full-stack applications that integrate AI/LLM capabilities into practical, production-style systems; has hands-on experience across frontend, backend, and AI integration

3. SKILLS (grouped tag/pill layout with category headers, use relevant tech icons)

- Languages: Python, JavaScript, SQL

- Backend & Web: Django, Django REST Framework

- AI & LLM: Large Language Models, Agentic Function Calling

- Databases: MySQL

- Tools & Platforms: Git, GitHub, Docker, PyCharm

4. PROJECTS (card-based grid, 2-3 cards per row on desktop, each with tech stack tags and a GitHub button)

Card 1 — Nexus AI

Description: AI-powered customer support platform built with Django and Google Gemini. Uses agentic function calling to handle live order, refund, and delivery queries via Django ORM, plus direct context injection for company policy/FAQ answers. Supports multi-turn conversations with memory, and a responsive JavaScript chat interface backed by MySQL.

Tech: Python, Django, Google Gemini, MySQL, JavaScript, Bootstrap 5

GitHub: https://github.com/SahilSonekar/NexusAI

Card 2 — Frenzo

Description: Full-stack social media platform with secure JWT authentication, user profiles, friend requests, and role-based authorization. Built REST APIs for posts, comments, and profile management. Integrated AI-powered NSFW image moderation to keep content safe. Fully containerized with Docker Compose.

Tech: Django REST Framework, Vue.js, Pinia, PostgreSQL, Docker

GitHub: https://github.com/SahilSonekar/Frenzo

Card 3 — Zombie Survival Game

Description: A 2D top-down zombie survival game built from scratch in Python. Features FSM-based zombie AI (patrol, chase, attack, search), A* pathfinding, vision cones and hearing-based detection, a day/night cycle, and JSON save/load. Built as a systems/algorithms-focused portfolio project.

Tech: Python, Pygame-CE, Tiled, JSON

GitHub: [placeholder — add repo link when ready]

5. LEADERSHIP & POSITIONS OF RESPONSIBILITY (timeline or simple two-column list)

- Founder & Captain, Junior FC — Led the team to the semi-finals of the Jhund Football Tournament

- Captain, College Football Team — Coordinated team strategy and led the team to victory in an inter-college tournament

6. ACHIEVEMENTS & CERTIFICATIONS (two-column or badge-style layout)

Achievements:

- MAH MCA CET 2025 — 98.92 percentile (state-level entrance exam)

- Inter-College Football Tournament Champions (as team captain)

Certifications:

- Python Programming

- Django & Django REST Framework (DRF)

7. CONTACT

- Heading: "Let's Connect"

- Email button/link (placeholder icon, link to mailto:)

- GitHub and LinkedIn buttons

- Optional simple contact form (name, email, message) — static UI is fine, no backend needed yet

FOOTER

- Simple centered footer: "Built by Sahil Sonekar" with GitHub/LinkedIn icons, small copyright text

TECHNICAL NOTES

- Fully responsive (mobile, tablet, desktop)

- Sticky nav bar with section links (About, Skills, Projects, Leadership, Contact) that highlights the active section on scroll

- Fast-loading, no unnecessary heavy animations

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2f6fe4d5-c8a8-4888-9ab6-df80519f87e5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
