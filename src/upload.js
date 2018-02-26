var csv = require("fast-csv")
var mongoose = require("mongoose")
var Training = require("./trainingData.model")

exports.post = function(req, res) {
	if (!req.files) return res.status(400).send("No files were uploaded.")

	var trainingFile = req.files.file

	var trainingDataChunk = []
	var trainingPromises = []
	var newTrainingData = 0

	var failures = []

	if (trainingFile == undefined)
		return res.status(400).send("No files were uploaded.")

	csv
		.fromString(trainingFile.data.toString(), {
			headers: true,
			ignoreEmpty: true
		})
		.on("data", function(data) {
			trainingDataChunk.push(data)
		})
		.on("end", function() {
			trainingDataChunk.forEach((training, ind, arr) => {
				// Save each database request promise into array so we can keep track of when they all finish
				trainingPromises[ind] = Training.findOneAndUpdate(
					{ hid: training.hid },
					training,
					{ upsert: true, setDefaultsOnInsert: true }
				)

				// Execute the db request
				trainingPromises[ind].exec(function(err, document) {
					if (err) {
						failures.push(err)
						console.log(err)
					}

					// The returned document is empty if the trainingData did not exist in the collection
					if (isEmpty(document)) {
						newTrainingData++
					}
				})
			})

			// Wait for all db requests to finish so we can return the amount of new trainingData created
			Promise.all(trainingPromises).then(function(vals) {
				var result = `Updated ${trainingDataChunk.length -
					newTrainingData} trainingDataChunk and created ${newTrainingData} new trainingDataChunk. \n${failures}`
				var rdata = {
					success: "ok",
					response: result
				}
				res.send(rdata)
			})
		})
}

// Returns true if passed object is empty
function isEmpty(obj) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) return false
	}
	return true
}
