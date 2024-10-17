# Firebase To-Do Application

This repository contains a simple To-Do application built using Firebase. The goal is to allow users to add, update, delete, and set tasks. 

## Project Structure

```
project-root/
├── app/
│   ├── index.html (Login page)
│   ├── register.html (User registration page)
│   ├── tasks.html (Tasks management page)
│   ├── auth.js (Handles Firebase authentication and tasks)
│   └── app.js (Handles UI logic and events)
├── functions/
│   ├── index.js (Firebase Cloud Functions)
│   └── package.json (Function dependencies)
├── firestore.rules (Firestore security rules)
├── firebase.json (Firebase project configuration file)

```

## Prerequisites

- **Node.js** (v12 or above)
- **Firebase CLI**
- **Firebase Project**: You need to create a Firebase project from the Firebase Console.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install Firebase CLI** (if not already installed)

   ```bash
   npm install -g firebase-tools
   ```

3. **Log in to Firebase**

   ```bash
   firebase login
   ```

4. **Initialize Firebase Project**

   If you have not yet set up Firebase in this directory:
   ```bash
   firebase init
   ```
   Select **Firestore**, **Functions**, and **Hosting**.

5. **Install Dependencies**

   Navigate to the `functions` folder and install the dependencies:
   ```bash
   cd functions
   npm install
   ```

6. **Deploy Firestore, Functions, and Hosting**

   Navigate back to the project root:
   ```bash
   cd ..
   ```

   Then, deploy the Firebase project:
   ```bash
   firebase deploy
   ```

7. **View Your Project**

   Visit the URL provided after the successful deployment to access your To-Do app.

## Firestore Database Setup

In the Firebase Console, you need to create Firestore collections:

- **users**: Stores user details such as `email` and `name`.
- **todos**: Stores tasks for each user as sub-collections.

### Example Document Structure

- **users** (Collection)
  - **userId123** (Document)
    - `email`: "user@example.com"
    - `name`: "John Doe"

- **todos** (Collection)
  - **userId123** (Document)
    - **tasks** (Sub-Collection)
      - **taskId1** (Document)
        - `task`: "Buy groceries"
        - `completed`: false
        - `createdAt`: timestamp

## Important Notes

- Make sure to set up **Firestore Rules** to allow read and write access to authenticated users only.
- Proper error handling has been implemented in Cloud Functions to throw Firebase `HttpsError` when necessary.

