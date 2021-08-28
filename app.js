const express = require('express')
const app = express()
const CustomError = require('./customError')
const errMsg = 'Query must include nums which consists of numbers separated by a comma'
const {getMean, getMedian, getMode, checkNums} = require('./functions')

app.get('/mean', function(req, res, next) {
    if (!req.query.nums) {
        throw new CustomError(errMsg, 400)
    }
    let nums = checkNums(req.query.nums)
    
    if (nums instanceof Error) {
        throw new CustomError(nums.message)
    }

    let response = {
        operation: "mean",
        value: getMean(nums)
    }
    
    return res.send(response)
})

app.get('/median', function(req, res, next) {
  if (!req.query.nums) {
      throw new CustomError(errMsg, 400)
  }
  let nums = checkNums(req.query.nums)
  
  if (nums instanceof Error) {
      throw new CustomError(nums.message)
  }

  let response = {
      operation: "median",
      value: getMedian(nums)
  }
  
  return res.send(response)
})

app.get('/mode', function(req, res, next) {
  if (!req.query.nums) {
      throw new CustomError(errMsg, 400)
  }
  let nums = checkNums(req.query.nums)
  
  if (nums instanceof Error) {
      throw new CustomError(nums.message)
  }

  let response = {
      operation: "mode",
      value: getMode(nums)
  }
  
  return res.send(response)
})

app.use(function (req, res, next) {
  const err = new CustomError("Not Found",404);
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});



app.listen(4000, function() {
    console.log('App on port 4000')
})