const path = require('path');
const dotenv = require('dotenv');

const ALLOWED_ENVS = ['staging', 'preprod', 'prod'];
const env = process.env.NODE_ENV || 'staging';

if (!ALLOWED_ENVS.includes(env)) {
  throw new Error(`Invalid NODE_ENV "${env}". Expected: ${ALLOWED_ENVS.join(', ')}`);
}

dotenv.config({ path: path.resolve(__dirname, `env/.env.${env}`) });

module.exports = {
  env,
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
};
