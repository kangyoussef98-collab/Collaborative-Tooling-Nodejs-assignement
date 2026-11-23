const mongoose = require('mongoose');
const { mongoUri, env } = require('./config');

async function connectDB() {
  if (!mongoUri) {
    throw new Error(`MONGO_URI is missing for environment: ${env}`);
  }
  await mongoose.connect(mongoUri);
  console.log(`[${env}] MongoDB connected`);
}

module.exports = connectDB;
