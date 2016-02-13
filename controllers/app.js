angular.module("starter",["ui.router","starterControllers"])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('root', {
            url: '',
            abstract:true,
            views : {
                '':{templateUrl:'index.html' },
                'header@': { templateUrl: 'partials/header.html' },
                'footer@': { templateUrl: 'partials/footer.html' }
            }  			
        })
        .state('root.home', {
            url: '/home',
            views : {
                'content@':{
                    templateUrl: 'partials/home.html',
                    controller:'HomeCtrl'
                }
            }   
        })

        .state('root.pages', {
            url: '/pages',
            views : {
                'content@':{
                    templateUrl: 'partials/pages.html',
                    controller: 'PageCtrl'
                }
            }   
        })
        .state('root.features', {
            url: '/features',
            views : {
                'content@':{
                    templateUrl: 'partials/features.html'
                }
            }   
        })
        .state('root.portfolio', {
            url: '/portfolio',
            views : {
                'content@':{
                    templateUrl: 'partials/portfolio.html'
                }
            }   
        })
        .state('root.blogs', {
            url: '/blogs',
            views : {
                'content@':{
                    templateUrl: 'partials/blogs.html'
                }
            }   
        })
        .state('root.shop', {
            url: '/shop',
            views : {
                'content@':{
                    templateUrl: 'partials/shop.html'
                }
            }   
        })    
 ;       
});



