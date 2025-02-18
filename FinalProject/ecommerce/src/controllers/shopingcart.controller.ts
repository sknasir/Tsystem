import * as angular from 'angular';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { Authservice } from '../services/auth.service';

export class ShoppingCartController {
  static $inject = ['$scope', 'CartService', 'CheckoutService','Authservice', '$location'];

  message: string;
  cart: Array<any>;

  constructor(
    private $scope: IDataScope, 
    private cartService: CartService, 
    private checkoutService: CheckoutService, 
    private authService: Authservice, 
    private $location: angular.ILocationService
  ){
    this.message = 'Welcome to TypeScript!';  

    // Load the cart using the CartService
    this.cart = this.cartService.loadCart();  

    $scope['data'] = this;
  }

  // Calculate total price
  public getTotalPrice(): number {
    //return this.cart.reduce((total, item) => total + item.price, 0);
    let total = 0;
    this.cart.forEach(item => {
      total += this.getItemTotalPrice(item);  // Use getItemTotalPrice method
    });
    return total;
  }
  
   // Function to get the total price of a cart item
   public getItemTotalPrice(item: any): number {
    return item.price * item.quantity;  // Multiply price by quantity
  }

  // Function to increase quantity of a product
  public increaseQuantity(index: number): void {
    this.cart[index].quantity += 1;  // Increase quantity of the item
    this.saveCart();  // Save updated cart to sessionStorage
  }

  // Function to decrease quantity of a product
  public decreaseQuantity(index: number): void {
    if (this.cart[index].quantity > 1) {  // Prevent going below quantity 1
      this.cart[index].quantity -= 1;  // Decrease quantity of the item
      this.saveCart();  // Save updated cart to sessionStorage
    }
  }

  public checkout(): void {
    // Here, you'd collect the user's information (e.g., from a form). This is just a sample.
    const userDetails = this.authService.getuserdetails();
    
    const checkoutResult = this.checkoutService.processCheckout(this.cart, userDetails);

    if (checkoutResult === 'Order successfully processed. Thank you for your purchase!') {
      this.cartService.clearCart();  // Clear the cart after successful checkout
      this.$location.path('/thank-you');  // Redirect to the "Thank You" page
    } else {
      alert(checkoutResult);
      
      this.$location.path('/auth'); // Redirect to the "Thank You" page
    }
  }
  
  // Function to save the current cart to sessionStorage
  private saveCart(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Remove an item from the cart
  public removeFromCart(index: number): void {
    this.cartService.removeFromCart(this.cart, index);  // Use CartService to remove and update the cart
  }
}
