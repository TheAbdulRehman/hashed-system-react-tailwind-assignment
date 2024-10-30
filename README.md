# Hashed System React Tailwind Assessment

### Abdul Rehman

### abdulrahman693.693@gmai.com

## Overview

This project is built using modern frontend technologies to create a responsive and interactive user interface. The assessment leverages React, Tailwind CSS, and additional libraries to deliver a seamless user experience.

### Technologies Used

- **React 18**: The core JavaScript library for building the user interface.
- **shadcn/ui (latest version)**: Provides a collection of well-designed, customizable UI components.
- **Recharts**: For building interactive and responsive charts and data visualizations.
- **Tailwind CSS (latest version)**: A utility-first CSS framework for styling and layout.

### Folder Structure

All the components used in the project are organized in the `components` folder for better modularity and maintainability. Here’s a brief breakdown of the structure:

- **components/**
  - **ui/**: Contains all base UI elements, providing core components such as buttons, inputs, etc., for reuse across the project.
  - **icons/**: Houses all SVG icons used in the project.
  - **layouts/**: Contains layout components for the dashboard, including the sidebar, dashboard header, and general layout structure.
  - **dashboard/**: Includes folders and components organized by dashboard sections, where each folder represents a different section or page in the dashboard.

### Other Sections

In addition to the components folder, other folders inside the `src` directory include:

- **config/**: For configuration files.
- **routes/**: Contains route definitions and setups.
- **lib/**: Holds utility and helper functions.
- **hooks/**: Custom React hooks used in the project.
- **pages/**: This folder includes primary page components.

#### Pages Folder

- **dashboard-page.jsx**: Contains all the data displayed on the main dashboard page.
- **error-page.jsx**: Handles error pages and displays error information for improved user experience.

All other components within the `pages` folder are created for testing purposes.

### Running the Project

To get started with the project, follow these steps:

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Then run project**:

   ```bash
   npm run dev
   ```
