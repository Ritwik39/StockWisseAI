# StockWise API

ASP.NET Core (.NET 10) Web API for StockWise AI.

## Run

```bash
cd backend
dotnet run --project src/StockWise.Api
```

- API: http://localhost:5000
- Swagger UI (try endpoints in the browser): http://localhost:5000/swagger
- Health check: http://localhost:5000/api/health

## Test

```bash
cd backend
dotnet test
```

## Configuration

`src/StockWise.Api/appsettings.json`

| Key | Purpose |
|---|---|
| `Cors:AllowedOrigins` | Frontend URLs allowed to call the API (default `http://localhost:4200`) |
