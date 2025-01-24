

### **README.md**

```markdown
# Song Library Project

This is a full-stack project where users can sign up and manage songs. The backend is built using **Node.js** and **Express.js**, while the frontend is developed using **Vue.js**.

## Features
- User authentication (sign up/login)
- Add, update, and delete songs
- Database management using **MySQL**

## Technologies Used
- **Node.js** (Backend)
- **Express.js**
- **Vue.js** (Frontend)
- **MySQL** (Database)
- **JWT Authentication**
- **Nodemon** (for auto-restarting the server during development)

## Installation Instructions

### Backend (Node.js)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/song-library.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database (MySQL):
   - Create a MySQL database named `song_library`.
   - Add your database credentials to the `.env` file in the root directory.

   Example `.env`:
   ```env
   PORT=8082
   DB_NAME=song_library
   DB_USER=root
   DB_PASSWORD=yourpassword
   HOST=localhost
   DIALECT=mysql
   ```

5. Run the backend server:
   ```bash
   npm run start
   ```

### Frontend (Vue.js)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Run the frontend development server:
   ```bash
   npm run dev
   ```

### Running Both Servers
- **Backend** will run on `http://localhost:8082`.
- **Frontend** will run on `http://localhost:8080`.

### API Endpoints

- **POST** `/api/signup` - User sign-up
- **POST** `/api/login` - User login
- **GET** `/api/songs` - Get all songs
- **POST** `/api/songs` - Add a new song
- **PUT** `/api/songs/:id` - Update an existing song
- **DELETE** `/api/songs/:id` - Delete a song

## How to Contribute
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request.



