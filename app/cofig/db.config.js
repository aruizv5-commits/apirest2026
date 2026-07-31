module.exports = {
  HOST: "ep-lingering-night-aukh27yr-pooler.c-10.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_zUgWJZp17wHk",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};