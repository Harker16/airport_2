'use strict';

describe('Plane', function() {

	var plane;
	var airport;

	beforeEach(function() {
		plane = new Plane();
		airport = jasmine.createSpy('airport')
	})

	describe('land', function() {
		it('planes can land at an airport', function() {
			expect(plane.land(airport)).toBeDefined();
		});
	});
	describe('takeOff', function() {
		it('planes can take off', function(){
			expect(plane.takeOff(airport)).toBeDefined();
		});
	});

});
