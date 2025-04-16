# 🌐 SocialMedia App

A full-stack social media application built using **React** (frontend) and **Django + Django REST Framework** (backend). It includes features like user authentication, profile management, posts, likes, comments, following, and friend requests.

This project is containerized using **Docker**, served with **Nginx** and **Gunicorn**, and was deployed via **GitLab CI/CD** on DigitalOcean.

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- 👤 User Profile (View & Edit)
- 📝 Create, Read, Update, Delete Posts
- ➕ Follow/Unfollow other users
- 🤝 Send Friend Requests
- 📦 RESTful API with Django REST Framework
- 🌐 Responsive Frontend using React + CSS
- 🐳 Dockerized for development and production
- 🚀 GitLab CI/CD for automated deployment
- 🔥 Production-ready with Gunicorn + Nginx

---

## 🛠 Tech Stack

### Frontend:

- React
- React Router
- Axios
- CSS

### Backend:

- Django
- Django REST Framework
- Simple JWT
- PostgreSQL (or SQLite for local)

### DevOps:

- Docker
- Nginx
- Gunicorn
- GitLab CI/CD

---

## ⚙️ Local Development Setup

### Prerequisites

- Docker & Docker Compose
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/itsatul/Social-Media-Platform.git
cd Social-Media-Platform
```

### 2. Environment Variables

Adopt `.env` file in the project root

### 3. Start the Project

```bash
docker-compose up --build
```

This will spin up:

- **Backend**: Django app running with Gunicorn
- **Frontend**: React app
- **Nginx**: Serving both apps
- **Database**: PostgreSQL

### 4. Migrate and Create Superuser

In a new terminal:

```bash
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

---

## 🌍 Access the App

- Frontend: [http://localhost](http://localhost)
- Admin Panel: [http://localhost/admin](http://localhost/admin)

---

---

## 🧪 Running Tests

```bash
docker-compose exec backend python manage.py test
```

---

## 📦 GitLab CI/CD

This project includes a `.gitlab-ci.yml` file to automate:

- Build & test steps
- Docker image creation
- Deployment to production (optional via SSH, Kubernetes, or server)

Update variables in GitLab > Settings > CI/CD to match your environment.

---

## 🧱 Production Notes

- Use **HTTPS** via Nginx with Certbot
- Set `DEBUG=False` and configure allowed hosts
- Use persistent volume for DB and media files
- Use Gunicorn workers as per CPU count

---

## 📄 License

[MIT](LICENSE)

---

## ✨ Author

Made with ❤️ by **Atul Kumar Yadav and Constractor Acadamy team**
