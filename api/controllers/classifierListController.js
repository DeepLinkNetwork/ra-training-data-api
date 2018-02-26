"use strict"

var mongoose = require("mongoose"),
	TrainingData = mongoose.model("TrainingData")

exports.list_all_chunk = function(req, res) {
	TrainingData.find({}, function(err, chunk) {
		if (err) {
			res.status(400).send(err.errors)
		} else res.json(chunk)
	})
}

exports.create_a_chunk = function(req, res) {
	var new_chunk = new TrainingData(req.body)
	new_chunk.save(function(err, chunk) {
		if (err) {
			res.status(400).send(err.errors)
		} else {
			res.json({
				message: "Chunk created successfully.",
				data: chunk
			})
		}
	})
}

// get post, put , delete by hid

exports.read_a_chunk_by_hid = function(req, res) {
	TrainingData.find({ hid: req.params.chunkHid }, function(err, chunk) {
		if (err) {
			res.status(400).send(err)
		} else {
			if (chunk.length != 0) res.json(chunk[0])
			else
				res.status(400).send({
					error: "Requested " + req.params.chunkHid + " chunk not found."
				})
		}
	})
}

exports.read_a_chunk_by_hid_post = function(req, res) {
	TrainingData.find({ hid: req.body.hid }, function(err, chunk) {
		if (err) {
			res.status(400).send(err)
		} else {
			if (chunk.length != 0) res.json(chunk[0])
			else
				res.status(400).send({
					error: "Requested " + req.body.hid + " chunk not found."
				})
		}
	})
}

exports.update_a_chunk_by_hid = function(req, res) {
	TrainingData.findOneAndUpdate(
		{ hid: req.params.chunkHid },
		req.body,
		{ new: true },
		function(err, chunk) {
			if (err) {
				res.status(400).send(err)
			} else {
				if (chunk != null)
					res.json({ message: "Update successfully", data: chunk })
				else
					res.status(400).send({
						error: "Requested " + req.params.chunkHid + " chunk not found."
					})
			}
		}
	)
}

exports.delete_a_chunk_by_hid = function(req, res) {
	TrainingData.remove(
		{
			hid: req.params.chunkHid
		},
		function(err, chunk) {
			if (err) {
				res.status(400).send({
					error: "Requested " + req.params.chunkHid + " chunk not found."
				})
			} else {
				if (chunk.n > 0)
					res.json({ message: "Deleted successfully", data: chunk })
				else
					res.status(400).send({
						error: "Requested " + req.params.chunkHid + " chunk not found."
					})
			}
		}
	)
}

// get, post , put , delete :-by _id

exports.read_a_chunk = function(req, res) {
	TrainingData.findById(req.params.chunkId, function(err, chunk) {
		if (err) {
			res.status(400).send({
				error: "Requested " + req.params.chunkId + " cannot be found."
			})
		} else {
			if (chunk != null) res.json(chunk)
			else
				res.status(400).send({
					error: "Requested " + req.params.chunkId + " chunk not found."
				})
		}
	})
}

exports.read_a_chunk_by_post = function(req, res) {
	TrainingData.findById(req.body.id, function(err, chunk) {
		if (err) {
			res.status(400).send({
				error: "Requested " + req.body.id + " chunk not found."
			})
		} else {
			if (chunk != null) res.json(chunk)
			else
				res.status(400).send({
					error: "Requested " + req.body.id + " chunk not found."
				})
		}
	})
}

exports.update_a_chunk = function(req, res) {
	TrainingData.findOneAndUpdate(
		{ _id: req.params.chunkId },
		req.body,
		{ new: true },
		function(err, chunk) {
			if (err) {
				res.status(400).send({
					error: "Requested " + req.params.chunkId + " chunk not found."
				})
			} else {
				if (chunk != null)
					res.json({ message: "Update successfully", data: chunk })
				else
					res.status(400).send({
						error: "Requested " + req.params.chunkId + " chunk not found."
					})
			}
		}
	)
}

exports.delete_a_chunk = function(req, res) {
	TrainingData.remove(
		{
			_id: req.params.chunkId
		},
		function(err, chunk) {
			if (err) {
				res.status(400).send({
					error: "Requested " + req.params.chunkId + " chunk not found."
				})
			} else {
				if (chunk.n > 0)
					res.json({ message: "Deleted successfully", data: chunk })
				else
					res.status(400).send({
						error: "Requested " + req.params.chunkId + " chunk not found."
					})
			}
		}
	)
}
