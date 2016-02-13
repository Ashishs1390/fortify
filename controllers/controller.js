angular.module('starterControllers', [])

.controller('HomeCtrl',['$scope',function($scope) {
   $scope.next = function() {
	console.log("next clicked");
	 angular.element('.current').removeClass('current').hide()
	 .next().show().addClass('current');
	 if (angular.element('.current').hasClass('last')) {
		  angular.element('#next').attr('disabled', true);
    }
    $('#prev').attr('disabled', null); 
 		}    	
}])

.controller('PageCtrl',['$scope',function($scope) {
	console.log("Fg");
	
}]);

