'use strict';

describe('Weather', function() {

	describe('isStormy', function() {

		var weather;

		beforeEach(function() {
		weather = new Weather();
		});

		it('can be non-stormy', function() {
			spyOn(Math, 'random').and.returnValue(0);
			expect(weather.isStormy()).toBe(false);
		});
		it('can be stormy', function() {
			spyOn(Math, 'random').and.returnValue(1);
			expect(weather.isStormy()).toBe(true);
		});
	});

});