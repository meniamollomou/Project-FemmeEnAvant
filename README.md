
# FemmeEnAvant – Empowering Women in Guinea

## Project Overview

FemmeEnAvant (French for Ladies First) is a web platform designed to empower women in Guinea by providing access to important information, inspiring stories, and news. The goal is to make it easier for women to know their rights, learn from others, and stay updated on what’s happening around them.

This project is a work in progress, and it will include various sections such as:

- Know Your Rights: A section that lists women’s rights.
- Stories: A platform for women to share their own stories and be inspired by others.
- News: An updated feed about women’s issues and events related to Guinea.
- Contact: A way for users to connect with the platform.

## Features

### Working Features:

- Homepage with easy navigation and links to the main sections.
- Quote of the Day: A daily motivational quote fetched from an external API.
- Rights Page: Lists different categories of rights (e.g., marriage, education, violence protection). It currently uses placeholders, ready to be connected to an API.
- Stories Page: Allows users to share and read inspirational stories. Placeholder implemented.
- News Page: Displays static content for now, but the structure is set to integrate real-time news via GNews API in the future.
- Contact Form: Basic form to send messages to the platform. Placeholder functionality for now.

### Not Working Yet:

- API Integrations: Right now, data for rights, news, and stories is either static or placeholder. In the future, the app will fetch real-time data via the following APIs:

- News: GNews API for news related to Guinea and women’s issues.
- Rights: Integration with a backend API (or possibly JSON storage) for detailed women’s rights information.

## Project Setup

To run this project locally, follow these steps:

### Prerequisites:

A code editor (like [VS Code](https://code.visualstudio.com/))
A browser (Chrome)
Live Server (VS Code extension for easy local server setup)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/meniamollomou/femmeenavant.git
```

### 2. Navigate to the Project Directory

```bash
cd femmeenavant
```

### 3. Open in VS Code

If you're using **VS Code**, open the folder:

```bash
code .
```

### 4. Run with Live Server

Install Live Server extension in VS Code.
Right-click on `index.html` or `home.html` and choose "Open with Live Server".

This will start a local server and open the site in your browser.

---

## How to Contribute

1. Fork this repository to your own GitHub account.
2. Clone your forked repo to your local machine.
3. Create a branch for your new feature or bug fix:

   ```bash
   git checkout -b new-feature
   ```
4. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```
5. Push your changes to GitHub:

   ```bash
   git push origin new-feature
   ```
6. Create a Pull Request (PR) from your branch to the `main` branch.

---

## Future Improvements

API Integration: Connect the app to real-time APIs for quotes, news, and rights.
Backend: Implement a backend to store and retrieve user-submitted stories.
Responsive Design: Ensure the website is mobile-friendly and optimized for all screen sizes.
Translation: Complete the French translation for the entire website (as most of the target audience is French-speaking).

---

## Technologies Used

HTML5: Structure and layout of the pages.
CSS3: Styling, including layout, color scheme, and responsiveness.
JavaScript: For handling dynamic content and API calls.
APIs: 
- Advice slid API
- GNews API for fetching news articles (planned for future integration).
* **VS Code**: Code editor.
* **Git**: Version control.

---

## Acknowledgments

A big thank you to **Ilex** for providing this opportunity and helping me build the basic knowledge of frontend development. This project has allowed me to create something useful and meaningful, and I am excited to continue working on it in the future.

---

Feel free to reach out if you have any questions or suggestions for improvements!

---

### Additional Notes

* If you need help setting up or have issues, please feel free to **create an issue** in the GitHub repo or contact me directly.
* **Pull requests are welcome!** If you want to contribute, just fork the repo and submit your changes.

---

👉 This README gives a clear, structured overview of your project and should guide users and contributors effectively.

Would you like me to add anything else, or do you need any changes to make it fit your specific goals?
