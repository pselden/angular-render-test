var numbers = [];
for(var i = 0; i < 2000; ++i){
    numbers.push({value: i});
}

module.exports = function($scope, $translate, tmhDynamicLocale){
    $scope.selectedLocale = 'en';
    $scope.clicks = 0;
    $scope.supportedLocales = [
        {value: 'en', name: 'English'},
        {value: 'fr', name: 'français'}
    ];

    $scope.changeLocale = function () {
        $translate.use($scope.selectedLocale);
        tmhDynamicLocale.set($scope.selectedLocale);
    };

    $scope.numbers = numbers;
};