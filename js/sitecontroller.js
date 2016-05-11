app.controller('SiteController', [ '$location', '$scope', '$animate', function($location, $scope, $animate) {
  localStorage.getItem('color');
  $scope.secondpage = function() {
    $location.path('/secondpage');
  }
  $scope.homepage = function() {
    $location.path('/');
  }
  $scope.setblue = function() {
    $scope.textType = 'blue';
  }
  $scope.setgreen = function() {
    $scope.textType = 'green';
  }
}]);
