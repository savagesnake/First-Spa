(function(){
	var app = angular.module('myApp',[ ]);
	
	app.controller('CusomerController',function($scope){
		
		  $scope.sortBy = 'name';
          $scope.reverse = false; 
		
		$scope.customers = [{name: 'John', city: 'Chandler', orderTotal: '9.9956', joined: '2000-12-02'}, {name: 'Zed', city: 'Las Vegas', orderTotal: '19.99', joined: '1965-01-25'}, {name: 'Tina', city: 'New York',  orderTotal: '44.99', joined: '1944-06-15'}, {name: 'Dave', city: 'Seattle', orderTotal: '101.5', joined: '1995-03-28'}];
		
		 $scope.doSort = function(propName){
                $scope.sortBy = propName;
                $scope.reverse = !$scope.reverse;
            
            //end doSor
            } ;
	
	//end of CusomerController
	});
	

})();

