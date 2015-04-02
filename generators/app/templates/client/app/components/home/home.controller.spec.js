'use strict';

describe('Controller: HomeController', function () {

	// load the controller's module
	beforeEach(module('<%= scriptAppName %>.home'));

	var HomeController, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		HomeController = $controller('HomeController', {
			$scope: scope
		});
	}));

	it('should exist', function () {
		HomeController.should.be.instanceof(Object);
	});
});
