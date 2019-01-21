const { AWS } = require('./aws')

const cloudwatchService = new AWS.CloudWatch({ apiVersion: '2010-08-01' })

module.exports = {
  cloudwatchService
}
