'use strict';

describe('Feature Test', function() {

var plane;
var airport;
var weather;

beforeEach(function() {
	weather = jasmine.createSpyObj('weather', ['isStormy']);
	airport = new Airport(weather);
	plane = new Plane();
	
});

	it('planes can be instructed to land at an airport', function() {
		weather.isStormy.and.returnValue(false);
		airport.land(plane);
		expect(airport.planes()).toContain(plane);
	});

});