# 🐍 Snake Master

A sleek, full-stack implementation of the classic Snake arcade game. Built with a modern aesthetic, this project features a real-time reactive grid, endless border wrap-around logic, and a live persistent backend to track the top scores globally!

## 🚀 Tech Stack
* **Frontend**: React, Vite, Tailwind CSS v4
* **Backend**: Node.js, Express, File-based persistence
* **Orchestration**: Docker Compose

## 📁 Repository Structure
```text
.
├── docker-compose.yml     # Orchestrates both services seamlessly
└── snake-game/
    ├── backend/           # Node/Express API to store high scores
    └── client/            # Fast Vite/React interactive frontend
```

## 💻 Playing Locally (Native Development)

If you have Node.js installed, you can spin up the development servers natively without Docker. **Remember, both servers must be running actively.**

### 1. Launch the Backend Leaderboard API
```bash
cd snake-game/backend
npm install
node server.js
```
*The backend will boot up and listen silently on `http://localhost:5000`.*

### 2. Launch the Frontend React App
Open a completely new terminal window or tab:
```bash
cd snake-game/client
npm install
npm run dev
```
*Open your browser to `http://localhost:5173`, enter your name, and play!*

## 🐳 Running with Docker

Don't want to bother with installing Node packages or running split terminal servers? You can launch the entire application seamlessly using Docker!

```bash
docker compose up -d --build
```
This single command automatically packages the React frontend behind an ultra-fast NGINX server, wires it to your Express backend, and binds them to your `localhost` ports. Navigate to `http://localhost:5173` in any browser to get hunting!

## 🎮 Game Rules
* Use **W A S D** or **Arrow Keys** to steer the snake.
* Hunt red apples to grow your tail and boost your score.
* **Wrap-around enabled**: Hitting the wall won't kill you; you'll teleport to the other side! But if you crash into your own tail... it's Game Over!
