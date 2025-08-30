Responsive Checkbox App

This is a React-based web app that demonstrates two key tasks:
Implementing a responsive layout (desktop + mobile) based on a Figma design.
Building a nested checkbox component with proper parent-child behavior.

🚀 Features

Task 1 – Responsive Layout
Fully responsive UI (desktop & mobile).
Components:
Navbar – navigation with adaptive styling.
Hero – hero section with text + call-to-action.
Features – feature cards grid, responsive stacking.
Footer – clean and mobile-friendly footer.
Global styles in index.css.

Task 2 – Nested Checkbox
Select All – checks/unchecks everything.
Category level (Fruits, Vegetables) – toggles all child items.
Individual items (Apple, Carrot, etc.) – toggle independently.
Indeterminate state – parent shows partially checked if only some children are selected.

🗂 Project Structure

responsive-checkbox-app/
│── public/
│   └── favicon.ico
│
│── src/
│   │── components/
│   │   ├── Navbar.jsx       # Responsive navbar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features grid
│   │   ├── CheckboxTree.jsx # Nested checkbox component (Task 2)
│   │   └── Footer.jsx       # Footer
│   │
│   │── App.js              # Main layout
│   │── index.css            # Global CSS
│   │── index.js             # React entry
│
│── package.json

🛠 Tech Stack
React.js 
CSS for responsive design

React state management for checkbox logic
⚡️ Getting Started
1. Clone the repo
git clone https://github.com/umaGannamani/responsive-checkbox-app.git
cd responsive-checkbox-app
2. Install dependencies
npm install
3. Run locally
npm start
npm run dev
4. Build for production
npm run build

Published url https://responsive-checkbox-app.vercel.app/

🙌 Author
[uma gannamani]
GitHub: https://github.com/umaGannamani
Email: gannamaniuma@gmail.com
Individual items (Apple, Carrot, etc.) – toggle independently.

Indeterminate state – parent shows partially checked if only some children are selected.
