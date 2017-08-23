'use strict';

var mongoose = require('mongoose'),
	Secret = require('./secret.model'),
	_ = require('lodash');

var responseMessage = function (data, statusCode) {
  return {
    data: data,
    statusCode: statusCode
  };
};

exports.get = function (selector) {
	return Secret.findOne(selector)
		.then(function(person) {
			return responseMessage(person, 200);
		})
		.fail(function (err) {
			return responseMessage(err, 422);
		});
};

exports.getAll = function () {
	return Secret.find()
		.then(function(people) {
			return responseMessage(people, 200);
		})
		.fail(function (err) {
			return responseMessage(err, 422);
		});
};

exports.delete = function (selector) {
	return Secret.remove(selector)
		.then(function(person) {
			return responseMessage(person, 200);
		})
		.fail(function (err) {
			return responseMessage(err, 422);
		});
};

exports.insert = function (data) {
	return Secret.create(data)
		.then(function (person) {
			return responseMessage(person, 200);
		})
		.fail(function (err) {
			return responseMessage(err, 422);
		});
};

exports.update = function (id, data) {
	return Secret.update({ _id: id }, data)
		.then(function (person) {
			return responseMessage(person, 200);
		})
		.fail(function (err) {
			return responseMessage(err, 422);
		});
};

exports.draw = function () {
	doDraw();
};

function doDraw(people) {
	Secret.find()
		.then(function(people) {
			console.log(people);
		})
}