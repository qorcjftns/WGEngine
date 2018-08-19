'use strict';

var WGPosition = require('../utils/WGPosition.js');

var WGObject = function() {
	this.name = "";
	this.position = new WGPosition();
};

WGObject.prototype = {
	getPosition: function() {
		return this.position;
	}
};


module.exports = WGObject;
