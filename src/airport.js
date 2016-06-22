'use strict';

function Airport(weather) {
	this._weather = typeof weather !== 'undefined' ? weather : new Weather();
	this._hangar = [];
}

Airport.prototype.planes = function() {
	return this._hangar;
}

Airport.prototype.land = function(plane) {
	if(this._weather.isStormy()) {
		throw new Error('Cannot land plane, too stormy!');
	}
	this._hangar.push(plane);
};

