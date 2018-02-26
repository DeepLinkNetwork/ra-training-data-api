var mongoose = require("mongoose")

var trainingData = mongoose.Schema(
	{
		hid: {
			type: String,
			required: true
		},
		chunk: String,
		has_space: {
			type: Number,
			default: 0
		}
	},
	{ versionKey: false }
)

var TrainingData = mongoose.model("TrainingData", trainingData)

module.exports = TrainingData
