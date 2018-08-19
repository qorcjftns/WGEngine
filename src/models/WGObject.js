'use strict';

var WGObject = function() {
	this.name = "";
	this.position.x = 0;
	this.position.y = 0;
};

WGObject.prototype = {
	getPosition: function() {
		return this.position;
	}
};


module.exports = WGObject;
