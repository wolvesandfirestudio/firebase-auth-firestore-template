![Built With](https://img.shields.io/badge/Built%20With-Firebase-yellow?style=for-the-badge&logo=firebase)
![Auth](https://img.shields.io/badge/Auth-Firebase%20Authentication-orange?style=for-the-badge&logo=firebase)
![Database](https://img.shields.io/badge/Database-Firestore-blue?style=for-the-badge&logo=google-cloud)
![Language](https://img.shields.io/badge/Language-JavaScript-blue?style=for-the-badge&logo=javascript)
![Framework](https://img.shields.io/badge/Frontend-Vite%20%2B%20React-61DAFB?style=for-the-badge&logo=react)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)

# Firebase Auth + Firestore Template (React)

A minimal boilerplate for Firebase-backed apps that use Firebase Auth and Firestore. Designed for rapid prototyping or launching production-ready JAMstack apps with secure user authentication and real-time database.

## Features

- 🔐 Firebase Email/Password Authentication
- 📁 User-specific Firestore document collections
- 🌐 Environment config via `.env`
- 🛠 Easy to deploy and customize

## Getting Started

1. Clone the repo:
   ```
   git clone https://github.com/YOUR_USERNAME/firebase-auth-firestore-template.git
   cd firebase-auth-firestore-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Firebase:
   - Go to [firebase.google.com](https://firebase.google.com/)
   - Create a project
   - Enable Email/Password Auth
   - Create a Firestore DB
   - Get your config keys and paste them in `.env`

4. Run the app:
   ```
   npm run dev
   ```

## Deployment

Use Vercel, Netlify, or Firebase Hosting. Just make sure to add your `.env` vars to their settings.

## Notes
This template is based on a production setup used in a real investigative tool (Ember Relay) and follows best practices for deploying small, secure Firebase-backed apps.

## Why I Made This
This template is based on real infrastructure I built and deployed for Ember Relay, an AI-powered investigative tool. I created this public version to help other devs — and to showcase my systems experience to potential clients.

If you're looking for someone who can spin up reliable backends, troubleshoot broken deployments, or automate operational chaos into calm, feel free to reach out.

## License
MIT

## Author
Built and maintained by @wolvesandfirestudio
