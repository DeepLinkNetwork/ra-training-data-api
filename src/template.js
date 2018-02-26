var json2csv = require('json2csv');
var trainingModel = require('./trainingData.model.js');

exports.get = function (req, res) {

    var fields = Object.keys(trainingModel.schema.obj);

    var csv = json2csv({ data: '', fields: fields });

    res.set("Content-Disposition", "attachment;filename=ra-training-data.csv");
    res.set("Content-Type", "application/octet-stream");

    res.send(csv);

};