'use strict';

describe('airport', function() {

	var airport;
	var plane;
	var weather;

	beforeEach(function(){
		weather = jasmine.createSpyObj('weather', ['isStormy']);
		airport = new Airport(weather);
		plane = jasmine.createSpy('plane');
		

	});

	describe('land', function() {
		it('does not allow a plane to land when stormy', function(){
			weather.isStormy.and.returnValue(true);
			expect(function(){ airport.land(plane); }).toThrowError('Cannot land plane, too stormy!');
		});
	});
});