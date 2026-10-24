# VoteFrontend - Online Voting System

A modern, responsive, role-based Online Voting and Election System frontend built with **React 19**, **Vite**, **Bootstrap 5**, and **React Router DOM**.

---

## 🚀 Overview

VoteFrontend provides a clean and intuitive user interface for managing and participating in institutional or organizational elections. It supports multiple distinct roles with dedicated dashboards and permissions:

- **Admin**: Create and manage elections, supervise candidates, register students, and analyze election outcomes.
- **Supervisor**: Oversee election integrity, review candidate nominations, approve votes, and monitor tallied results.
- **Candidate**: Manage candidate profiles, campaign information, and track election standings in real-time.
- **Student / Voter**: Explore candidate slates, cast secure votes, and review historical voting receipts.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Code Quality**: Oxlint

---

## 📁 Project Structure

```text
Frontend/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and styles
│   ├── Components/
│   │   ├── Admin/          # Admin dashboard & management components
│   │   ├── Candidate/      # Candidate profiles & election status
│   │   ├── Context/        # Authentication & global application state
│   │   ├── Pages/          # Login, Register, Landing views
│   │   ├── Routes/         # App routing and RoleRoute guards
│   │   ├── Services/       # Axios API client & endpoints
│   │   ├── Student/        # Voting portal & election history
│   │   ├── Supervisor/     # Supervisor dashboard & vote approvals
│   │   └── card/           # Reusable UI card components
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React root with BrowserRouter & AuthProvider
│   └── index.css           # Global CSS styling
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment & SPA routing rewrites
└── vite.config.js          # Vite build configuration
```

---

## ⚡ Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/k-karthikraja20/votefrontend.git
cd votefrontend
npm install
```

### 3. Environment Configuration

Copy the example environment file and configure the backend API endpoint:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Development Server

Start Vite in development mode:

```bash
npm run dev
```

### 5. Production Build

Compile and bundle for production:

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment on Vercel

This repository includes a `vercel.json` file configured with SPA rewrite rules to ensure client-side routing works smoothly without 404 errors on page refresh:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Vercel Deployment Settings:
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variable**: `VITE_API_URL` (Set to your deployed backend API URL)

---

## 🔒 Security & Privacy

- All sensitive credentials and environment files (`.env`) are excluded from Git tracking via `.gitignore`.
- Role-based route guards (`RoleRoute`) restrict access to role-specific views.
