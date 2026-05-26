# Student Task Planner

Simple React + Vite project for software engineering lab experiment. The app is automatically built and deployed to GitHub Pages using GitHub Actions.

## Deployment (GitHub Pages)

This repository is deployed as a static site using **GitHub Actions** and **GitHub Pages**:

- Workflow: `.github/workflows/deploy-pages.yml`
- Trigger: pushes to the `main` branch
- Build output: `student-task-planner/dist`

Note: for GitHub Pages project sites, Vite must be configured with the repository name as the base path (see `student-task-planner/vite.config.js`).