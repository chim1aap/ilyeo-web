/**
 * Created by Marcel on 9-7-2016.
 */
var pageList = {
    'home':         {dutch:'Home',
                        eng:'Home'},
    'taekwondo':    {dutch:'Taekwondo',
                        eng:'Taekwondo'},
    'vereniging':   {dutch:'Vereniging',
                        eng:'Association'},
    'trainingen':   {dutch:'Trainingen',
                        eng:'Trainings'},
    'examens':        {dutch:'Examens',
                        eng:'Exams'},
    'exameneisen':  {dutch:'Exameneisen',
                        eng:'Exam Requirements'},
};
/**
 * Initializes angular module Ilyeo and configures instantly the mapping from website URLs to page files
 * For instance; makes sure that when you browse to /besturen, pages/besturen.html gets displayed
 */
var ILYEO = angular.module('Ilyeo', ['ui.router']).config(function($urlRouterProvider, $stateProvider){
    //If invalid page is selected from URL, redirect to index page
    $urlRouterProvider.otherwise('/');
    /**
     * Returns a valid path for a page name, depending whether or not the user wants the site to be English
     * @param n the page name
     * @returns {string} Respective page URL in English/Dutch
     */
    var retUrl = function(n){
        return 'pages/'+n+'.html'; //TODO: FIX THIS TO DYNAMICALLY RETURN EN OR NL
    }

    //initializes index state routing
    $stateProvider.state('home', {
        url: '/',
        templateUrl: retUrl('home')
    });
    /**
     * Enables routing for a pagename
     * @param dutch Dutch pagename
     * @param eng   English pagename
     */
    var initState = function(dutch){
        $stateProvider.state(dutch, {
            url: '/'+dutch,
            templateUrl: retUrl(dutch)
        });
    }
    //Add all file names in pages.html
    initState('besturen');
    initState('exameneisen');
    initState('examens');
    initState('taekwondo');
    initState('trainers');
    initState('trainingen');
    initState('vereniging');
});

ILYEO.run(function($rootScope){
    $rootScope.pageList = pageList;
    $rootScope.ENG = false;
})
/**
 * Initializes controller for index page;
 */
ILYEO.controller('indexCtrl', function($scope, $rootScope){
    /**
     * Sets the scope pages to the pages dictionary
     */
    $scope.pages = $rootScope.pageList;
    $scope.ENG = $rootScope.ENG;
});