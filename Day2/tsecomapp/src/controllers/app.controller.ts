import * as angular from 'angular';


interface ICustomScope extends angular.IScope {
  vm: any; 
}


export class MyController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;


  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to Transflower TypeScript!';
    this.users=[
      { name: 'Shaikh Nasir', email: 'nasir@gmail.com' },
    ];
    
    $scope['vm'] = this;
  }
}


//angular.module('myApp').controller('MyController', MyController);
