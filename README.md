# Bite of Humor 😂

A modern and full-featured web application built with Next.js and TypeScript, designed for humor enthusiasts to discover, filter, and share jokes from around the world.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📜 Description

Bite of Humor is a sophisticated web app that goes beyond a simple joke display. It features a powerful filtering system, full internationalization support, and a highly reusable component-based architecture. Users can explore a vast collection of jokes, apply advanced filters for category and safety, and even select their country and language for a localized experience. The application is built with a focus on modern, clean, and maintainable code practices.

## 📋 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [License](#-license)
- [Contact](#-contact)

## 📸 Screenshot

![Bite of Humor Screenshot](httpshttps://i.imgur.com/8QO9y2B.png)
*(Feel free to replace this with a newer screenshot of your project!)*

## ✨ Key Features

-   **Joke Discovery:** Browse and read jokes fetched from a live API.
-   **Advanced Filtering System:** A powerful form to filter jokes by:
    -   Category (Programming, Dark, Pun, etc.)
    -   Search Term
    -   Safe Mode (to exclude certain types of jokes)
-   **Internationalization (i18n):** Full support for multiple languages and country-specific configurations, managed with `i18next`.
-   **Component-Driven UI:** Built with a library of reusable and professional components, including:
    -   A generic `FormRendered` that can build any form from a configuration object.
    -   A multi-variant, accessible `Card` component for displaying content.
-   **Premium Plan Showcase:** A dedicated page to display different subscription tiers or plans.
-   **(In Development):** User joke submission and community evaluation features.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Library:** [React](https://reactjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Internationalization:** [i18next](https://www.i18next.com/)
-   **Data Fetching:** Custom Hooks using `axios` API.
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js (v18 or later is recommended) and a package manager like `npm` or `yarn` installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DanSRM02/Bite-of-Humor](https://github.com/DanSRM02/Bite-of-Humor)
    cd Bite-of-humor
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of your project and add any necessary environment variables.
    ```
    NEXT_PUBLIC_JOKE_API_URL=[https://v2.jokeapi.dev]
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.

## 👤 Contact

DANSRM02 - [Your GitHub Profile](https://github.com/DANSRM02) - danielmercenaries417@gmail.com

---
*This README was generated with assistance from Google's Gemini.*