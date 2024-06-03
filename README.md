# Reactified-resume

## Project Description

**Reactified-resume** is an individual examination project in frameworks. It is a single-page application (SPA) built with React using Vite, styled with Tailwind CSS, and managed with Redux for global state management, handling both dark mode and navigation title styling.

### Features

- **Landing Page:** The entry point of the application.
- **About Page:** Provides a short bio.
- **Portfolio Page:** Displays GitHub repositories with clickable links.
- **Contact Page:** Contains a form (currently logs input data to the console).

### React Hooks
**useEffect** is used to perform an asynchronous operation (fetching data from the GitHub API) when the component mounts. It runs the fetch operation once, preventing unnecessary re-fetching and ensures the state is updated with the fetched data.

**useState** is used to manage state for the list of repositories fetched from GitHub on the Portfolio page. It is used because it reactively updates the UI when the state changes. It was also used to manage the state of the form data dynamically on the Contact page.

### React Redux Hooks
**useSelector** and **useDispatch** are used to manage the dark mode feature, providing an action (which useDispatch is used to trigger) to toggle the dark mode state and a reducer to handle the state change (which useSelector is used to keep track of in the Nav). 

The hooks are also used to make sure the highlighted-nav-title-background is the correct color when switching modes. Since I used props to make the highlight only appear on the current page I had to make sure it's state was accessible and could switch state when darkmode was enabled.

### Motivation and Learning Outcomes

- **Motivation:** This project was built to explore and demonstrate proficiency in modern web development frameworks and libraries.
- **Problem Solved:** It showcases a streamlined and interactive way to present personal and professional information.
- **Learning Outcomes:** Through this project, I learned advanced React concepts, state management with Redux, and styling with Tailwind CSS.
- **Uniqueness:** The use of modern tools and best practices in web development, combined with a focus on performance and user experience, makes this project stand out.

## Installation and Running the Project

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reactified-resume.git

2. Navigate to the project directory:
   ```bash
   cd reactified-resume

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

### Usage
Once the project is running, you can explore its features as follows:

- **Landing Page:** The initial page you see, where you can toggle dark mode using the moon button and navigate through the site.
- **About Page:** Displays a short bio.
- **Portfolio Page:** Shows your GitHub repositories. This page uses useEffect and fetch to retrieve and display the repositories.
- **Contact Page:** Contains a form that logs input data to the console. It uses useState to manage form data.

### Live Demo
To see the project in action, visit: https://mayarzapalo.netlify.app/



