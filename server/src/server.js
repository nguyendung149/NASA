const { loadPlanetsData } = require("./models/planets.model");
const http = require("http");
const app = require("./app");
// Edit default 8000
const PORT = process.env.PORT || 8000;
console.log(PORT);

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
