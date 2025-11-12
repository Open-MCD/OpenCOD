# Open-COD Express Server

Minimal Express server scaffold.

## Setup

1. Install dependencies:

```powershell
cd "c:/Users/Andy/Documents/Code/Open-COD"
npm install
```

2. Run server:

```powershell
npm start
# or for development with auto-reload (nodemon):
npm run dev
```

3. Run tests:

```powershell
npm test
```

Endpoints:
- GET /         -> { status: 'ok', message: 'Open-COD server' }
- GET /health   -> { status: 'ok', uptime: <seconds> }
