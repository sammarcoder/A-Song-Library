module.exports = {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || "song_library",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    options: {
      dialect: process.env.DIALECT || "mysql",
      host: process.env.HOST || "localhost",
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
