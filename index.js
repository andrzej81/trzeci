exports.handler = async function(event, context) {
    console.log('Remaining time: ', context.getRemainingTimeInMillis())
    console.log('Function name: ', context.functionName)
    return context.logStreamName
  }