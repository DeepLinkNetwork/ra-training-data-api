"use strict"
module.exports = function(app) {
	var classifierList = require("../controllers/classifierListController")

	var bodyParser = require("body-parser")

	var urlencodedParser = bodyParser.urlencoded({
		extended: false
	})

	app
		.route("/v1/json/classifier/all")
		.get(classifierList.list_all_chunk)
		.post(classifierList.list_all_chunk)

	app
		.route("/v1/json/classifier/create")
		.post(urlencodedParser, classifierList.create_a_chunk)

	// Operations using ID

	app
		.route("/v1/json/classifier/id")
		.post(urlencodedParser, classifierList.read_a_chunk_by_post)

	app
		.route("/v1/json/classifier/id/:chunkId")
		.get(classifierList.read_a_chunk)
		.put(urlencodedParser, classifierList.update_a_chunk)
		.delete(classifierList.delete_a_chunk)

	// Operations using HID

	app
		.route("/v1/json/classifier/hid")
		.post(urlencodedParser, classifierList.read_a_chunk_by_hid_post)

	app
		.route("/v1/json/classifier/hid/:chunkHid")
		.get(classifierList.read_a_chunk_by_hid)
		.put(urlencodedParser, classifierList.update_a_chunk_by_hid)
		.delete(classifierList.delete_a_chunk_by_hid)
}
