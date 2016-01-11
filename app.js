(function(){
  var gem = { name: 'Azurite', price: 2.95, quality: 'low' };
  var app = angular.module('gemStore', []);
  app.controller('StoreController',function(){
    this.product = gem;
  });
  
})();
