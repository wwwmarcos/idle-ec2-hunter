const { cloudwatchService } = require('./cloudwatch')
const moment = require('moment')

const start = moment().utc().startOf('week').format()
const end = moment().utc().format()

const params = {
  MetricName: 'CPUUtilization',
  Namespace: 'AWS/EC2',
  Period: 300000,
  StartTime: start,
  EndTime: end,
  Dimensions: [
    {
      Name: 'InstanceId',
      Value: 'i-batata'
    }
  ],
  Statistics: [
    'Maximum'
  ],
  Unit: 'Percent'
}

cloudwatchService
  .getMetricStatistics(params)
  .promise()
  .then(console.log)
