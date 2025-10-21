# 04_mypage_33915059

A minimal Express server with a few demo routes.

## Quick start

Prerequisites: Node.js 18+ recommended.

1. Install dependencies

```bash
npm install
```

2. Run the server

```bash
node index.js
```

Server starts on http://localhost:8000

## Routes

- GET `/` -> simple text "Hello World!"
- GET `/about` -> simple heading
- GET `/contact` -> simple heading and example email
- GET `/date` -> current date and time
- GET `/welcome/:name` -> greets the provided name
- GET `/chain` -> demonstrates chained handlers
- GET `/file` -> serves `files/a.html`

## Project structure

```
index.js            # Express app entry
routes/main.js      # Route definitions
files/a.html        # Sample HTML served by /file
```