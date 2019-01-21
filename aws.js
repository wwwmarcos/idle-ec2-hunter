const { config } = require('./config')
const AWS = require('aws-sdk')

AWS.config.update(config.AWS)

module.exports = { AWS }
