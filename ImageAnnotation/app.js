var myApp = angular.module("myApp", []);

myApp.controller("mainCtrl", function($scope) {
    $scope.imageList = [];
    init();

    function init() {
        $scope.imageList = [{
            path: "sample4_l.jpg",
            id: "sample4.jpg"
        }];

        $('#myCanvas').annotate({
            color: 'red',
            linewidth: 4,
            bootstrap: true,
            images: $scope.imageList,
            selectEvent: "click"
        });
    }


    $scope.pushImage = function() {
        if ($scope.imageList.length > 1)
            return;
        var obj = {
            path: "sample1_l.jpg",
            id: "sample1.jpg"
        };
        $scope.imageList.push(obj);
        $('#myCanvas').annotate("push", obj);
    };

    $scope.destroy = function() {
        $("#myCanvas").annotate("destroy");
        $scope.imageList = [];
        init();
    };

    $scope.saveAnnotation = function() {
        $("#myCanvas").annotate("saveAnnotation");
    }

    $scope.saveImage = function() {
        $("#myCanvas").annotate("saveImage");
    }
});