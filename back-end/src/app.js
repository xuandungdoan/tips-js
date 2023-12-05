const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const app = express()

app.use(helmet())
app.use(compression())

module.exports = app