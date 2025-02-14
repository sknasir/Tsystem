import * as angular from 'angular';

export class ShoppingCartController {
  static $inject = ['$scope'];
  message: string;
  cart: Array<any>;


  constructor(private $scope: IDataScope) {
    this.message = 'Welcome to TypeScript!';  

    this.cart = this.loadCart();  
    debugger
    $scope['data'] = this;
  }

  public removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    this.saveCart();  // Update sessionStorage after removing an item
 }

  // Save the current cart to sessionStorage
  private saveCart(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
 } 

  private loadCart(): any[] {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return [];  // If no cart is stored, return an empty array
}
}


//angular.module('myApp').controller('MyController', MyController);
