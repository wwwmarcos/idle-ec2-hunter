require('dotenv').load()

const config = {
  APP_PORT: process.env.APP_PORT || 3000,
  AWS: {
    accessKeyId: process.env.AWS_ACCESSKEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  }
}

module.exports = {
  config
}
