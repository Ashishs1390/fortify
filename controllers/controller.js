angular.module('starterControllers', [])

.controller('HomeCtrl',['$scope',function($scope) {
    console.log("Controller Called");
		$scope.one = true; 
		$scope.two = false; 
		$scope.three = false;

		$scope.showOne = function () {
			console.log("sdfd")
			$scope.one = true; 
			$scope.two = false; 
			$scope.three = false;
		}

		$scope.showTwo = function() {
			console.log("two function")
			$scope.one = false; 
			$scope.two = true; 
			$scope.three = false;
		}

		$scope.showThree = function() {
			$scope.one = false; 
			$scope.two = false; 
			$scope.three = true;
		}   	
}]);


