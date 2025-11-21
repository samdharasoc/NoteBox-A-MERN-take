NoteBox — A Clean & Minimal MERN Notes App

NoteBox is a beautifully designed, pastel-themed MERN stack application that lets users create, edit, and manage personal notes.
It focuses on simplicity, speed, and a calming UI, helping users think clearly without distractions.

🌟 Features

✔️ User authentication (signup + login)
✔️ Create, edit, delete notes
✔️ Cloud-stored notes (MongoDB Atlas)
✔️ Smooth modal editor
✔️ Pastel-theme UI with TailwindCSS
✔️ Secure JWT-based backend
✔️ Responsive design for all devices

🛠 Tech Stack
Frontend

React.js

TailwindCSS

React Router

Context API

Backend

Node.js

Express.js

JWT Authentication

MongoDB + Mongoose

📁 Project Structure
MERN-todo/
│
├── Client/            # React frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Server/            # Node.js backend
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── index.js
│   ├── db.js
│   └── ...
│
└── .gitignore

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/samdharasoc/NoteBox-MERN.git

2️⃣ Install Dependencies
Backend
cd Server
npm install

Frontend
cd ../Client
npm install

🔌 3️⃣ Environment Variables

Create a .env file inside the Server folder:

PORT=3001
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

▶️ 4️⃣ Run the Application
Start Backend
cd Server
npm start

Start Frontend
cd ../Client
npm start


The app will open at:

🔗 http://localhost:3000/

🎨 UI Preview

The app uses a soft pastel theme with a purple gradient background and minimalistic components.

🔒 Security

Passwords are hashed using bcrypt

JWT tokens used for authentication

Environment variables handled securely via .env

📜 License

This project is licensed under the MIT License.

🤝 Contributing

Feel free to fork and submit pull requests!

⭐ If you like this project…

Give it a star on GitHub!
It really helps 🌟