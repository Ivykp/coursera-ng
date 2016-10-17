(function() {
  angular.module('module1-assignment', [])
    .controller('MainController', MainController);
  
  MainController.$inject = ['$scope'];

  function MainController($scope) {
    $scope.currentMessage = '';
    $scope.currentData = '';
    $scope.currentColor = '';

    $scope.checkText = function() {
      const items = $scope.currentData.split(',')
        .map(item => item.trim())
        .filter(item => item !== '');
        
      if (items.length === 0) {
        $scope.currentMessage = 'Please enter data first';
        $scope.currentColor = 'red';
      } else {
        $scope.currentColor = 'green';
        if (items.length <= 3) {
          $scope.currentMessage = 'Enjoy!';
        } else {
          $scope.currentMessage = 'Too much!';
        }
      }
    }
  }
})();