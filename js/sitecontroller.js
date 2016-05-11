app.controller('SiteController', [ '$location', '$scope', '$animate', function($location, $scope, $animate) {
  localStorage.getItem('color');
  $scope.secondpage = function() {
    $location.path('/secondpage');
  }
  $scope.homepage = function() {
    $location.path('/');
  }
  $scope.colorchange = function() {
    if(color === undefined) {
      return green;
    } else {
      return blue;
    };
  };
  $scope.setblue = function() {
    localStorage.setItem('color', '1');
  }
  $scope.setgreen = function() {
    localStorage.setItem('color', undefined);
  }
}]);
