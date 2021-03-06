const http = require("http");
const app = require("./app");
const { sequelize } = require('./models/models');

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "4000");
app.set("port", port);

const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port: ${port}`;
  switch (error.code) {
    case "EACCES":
      process.exit(1);
      break;
    case "EADDRINUSE":
      Error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", async () => {
  const address = server.address();
  const bind = typeof address === "string" ? `pipe ${address}` : `port ${port}`;
  console.log('Listening to port ' + 4000)
  await sequelize.authenticate()
  // await sequelize.sync()
  console.log('Database Connected')
});

server.listen(port);
