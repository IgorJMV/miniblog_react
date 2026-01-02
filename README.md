# Mini Blog React + Firebase

A modern, responsive mini blog application built with **React** and integrated with **Google Firebase** for backend services and authentication.

## 🚀 Features

* **User Authentication:** Secure Sign Up and Login using Firebase Auth.
* **Create & Manage Posts:** Logged-in users can share their thoughts and manage their content.
* **Global State Management:** Utilizing React Context API and Hooks for a seamless data flow.
* **Dynamic Routing:** Client-side navigation powered by React Router.
* **Real-time Database:** Integration with Firebase Firestore to store and retrieve blog posts.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router DOM
* **Backend as a Service:** Google Firebase (Authentication & Firestore)
* **State Management:** Context API & Custom Hooks

---

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of **Node.js and npm**.
* You have a Firebase project created in the [Firebase Console](https://console.firebase.google.com/).

## ⚙️ Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/IgorJMV/your-repo-name.git](https://github.com/IgorJMV/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Firebase:**
    Create a `.env` file in the root directory and add your Firebase credentials:
    ```env
    REACT_APP_API_KEY=your_api_key
    REACT_APP_AUTH_DOMAIN=your_auth_domain
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_APP_ID=your_app_id
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    The app will be available at `http://localhost:3000`.

## 📖 Available Scripts

* `npm start`: Runs the app in development mode.
* `npm run build`: Builds the app for production.

---

## ✒️ Author

* **Igor J. M. V.** - [GitHub Profile](https://github.com/IgorJMV/)

---