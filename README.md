# Fly Digital Technology - Official Website

A full-stack, animated website for Fly Digital Technology - a digital marketing, AI solutions, and software maintenance company based in Hubballi, Karnataka, India.

## Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## Project Structure

```
fly/
├── server/
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Project.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── contact.js
│   │   ├── projects.js
│   │   └── services.js
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── projectController.js
│   ├── middleware/
│   │   └── validateContact.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── client/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── ParticleBackground.jsx
    │   │   ├── AnimatedCounter.jsx
    │   │   ├── ServiceCard.jsx
    │   │   ├── ProjectCard.jsx
    │   │   ├── ProjectModal.jsx
    │   │   ├── ContactForm.jsx
    │   │   └── ScrollReveal.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Services.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Contact.jsx
    │   │   └── NotFound.jsx
    │   ├── hooks/
    │   │   ├── useScrollReveal.js
    │   │   └── useCounter.js
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd fly
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following content:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/flydigital
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
RECEIVER_EMAIL=info@flydigitaltechnology.com
CLIENT_URL=http://localhost:5173
```

**Note**: To use Gmail with Nodemailer, you need to:
1. Enable 2-factor authentication on your Google account
2. Generate an "App Password" (use this instead of your regular password)

### 3. Seed the Database (Optional)

```bash
npm run seed
```

This will populate the database with sample services and projects.

### 4. Start the Backend Server

```bash
npm start
```

The server will run on `http://localhost:5000`

### 5. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form

### Projects
- `GET /api/projects` - Get all projects (supports `?category=` query param)
- `POST /api/projects` - Add a new project

### Services
- `GET /api/services` - Get all services grouped by category

## Features

### Frontend Features
- ✅ Dark theme with glassmorphism design
- ✅ Smooth scroll animations
- ✅ Particle background
- ✅ Animated counters
- ✅ Project filtering
- ✅ Modal project details
- ✅ Contact form with validation
- ✅ Responsive design (mobile-first)
- ✅ Page transitions
- ✅ SEO-friendly

### Backend Features
- ✅ RESTful API
- ✅ MongoDB integration
- ✅ Contact form handling
- ✅ Email notifications via Nodemailer
- ✅ CORS configuration
- ✅ Input validation

## Pages

1. **Home** - Hero section, animated counters, services overview, testimonials
2. **About Us** - Company story, mission/vision, core values, team, timeline
3. **Services** - Tab-based service categories with detailed service cards
4. **Projects** - Filterable project gallery with modal details
5. **Contact Us** - Contact info, Google Maps, and working contact form
6. **404 Not Found** - Animated error page

## Company Details

- **Name**: Fly Digital Technology
- **Tagline**: Transforming Ideas into Digital Success Through Innovation and Technology
- **Address**: Pride Icon Building, 3rd Floor, Gokul Road, Hubballi, Karnataka, India
- **Email**: info@flydigitaltechnology.com
- **Website**: www.flydigitaltechnology.com
- **Hours**: Monday to Saturday, 9:00 AM – 7:00 PM

## License

MIT
