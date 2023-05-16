<div style="display:flex; align-items: center">
  <img src="public/assets/redberrylogo.svg" alt="logo" width="220" style="margin-right: 20px" />
  <h1 style="position:relative; top: -6px" >Covid Questionnaire</h1>
</div>

Covid Questionnaire is a multi-step form designed to help companies gather valuable insights about their employees' COVID-19 situation. This project allows the employer to understand the employee's vaccination status, exposure history, preferences etc. With Covid Questionnaire, companies can take a proactive approach towards ensuring the safety and well-being of their workforce.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Resources](#resources)

#

### Prerequisites

- <img src="public/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm@8.19 and up\_
- <img src="public/assets/node.png" width="35" style="position: relative; top: 6px" /> node@16.18 and up\_

#

### Tech Stack

- <img src="public/assets/react.png" height="18" style="position: relative; top: 4px" /> [React](https://react.dev/reference/react) - JS framework for building user interfaces
- <img src="public/assets/vite.png" height="19" style="position: relative; top: 4px" /> [Vite](https://vitejs.dev/) - frontend tooling
- <img src="public/assets/tailwind.png" height="19" style="position: relative; top: 4px" /> [Tailwind](https://tailwindui.com/) - CSS framework

#

### Getting Started

1\. First of all you need to clone Covid Questionnaire repository from github:

```sh
git clone https://github.com/RedberryInternship/elene-metreveli-covid-questionare
```

2\. Next step requires you to run _npm install_ in order to install all the dependencies.

```sh
npm install
```

3\. after you have installed all the dependencies, it's time to run the project.

```sh
npm run dev
```

#

### Project Structure

```bash
├── public
├── src
│   ├── components
│   │   ├── Error
│   │   │   ├── Error.jsx
│   │   │   └── index.js
│   │   ├── FormTracker
│   │   │   ├── FormTracker.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── config
│   ├── context
│   ├── helpers
│   ├── pages
│   │   ├── Vaccination
│   │   │   ├── components
│   │   │   │   ├── Illustration
│   │   │   │   │   ├── Illustration.jsx
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── useVaccinationInputs.jsx
│   │   │   └── Vaccination.jsx
│   │   └── index.js
│   └── services
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── index.html
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

For more information about project standards, take a look at these docs:

- [React](https://react.dev/reference/react)

#

### Resources

[Figma Design](https://www.figma.com/file/56t2BI25FcD0LAIjR4GVkQ/%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%95%E1%83%90%E1%83%A0%E1%83%98?type=design)
