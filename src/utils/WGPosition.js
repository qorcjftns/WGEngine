'use strict';

var WGPosition = function() {
	this.x = 0;
	this.y = 0;
};

WGPosition.prototype = {
	getX: function() {
		return this.x;
	},
	getY: function() {
		return this.y;
	},
	setX: function(px) {
		this.x = px;
	},
	setY: function(py) {
		this.y = py;
	}
};


module.exports = WGPosition;
