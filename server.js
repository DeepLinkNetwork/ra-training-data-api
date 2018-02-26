"use strict"

// [START app]
const express = require("express")
const app = express()

var fileUpload = require("express-fileupload")
var mongoose = require("mongoose")
var template = require("./src/template")
var bodyParser = require("body-parser")
var upload = require("./src/upload")
var RateLimit = require("express-rate-limit")

var mongoURI = process.env.MONGOURI || require("./config/dbconfig").MONGOURI
mongoose.connect(mongoURI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
	res.setHeader("Access-Control-Allow-Credentials", true)
	next()
})

app.use(fileUpload())

app.get("/template", template.get)

app.use(express.static("public"))

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html")
})

app.post("/", upload.post)

var apiLimiter = new RateLimit({
	windowMs: 60000,
	max: 35,
	delayMs: 0
})

app.use("/v1/", apiLimiter)

var routes = require("./api/routes/classifierRoutes")
routes(app)

app.use(function(req, res) {
	res
		.status(404)
		.send({ error: "Requested url `" + req.originalUrl + "` not found" })
})

// Starting the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
	console.log("Press Ctrl+C to quit.")
})

// [END app]
