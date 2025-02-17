
export class CartService{
   
  
  
  constructor() {}

    // Save the current cart to sessionStorage
    public saveCart(cart: Array<any>): void {
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  
    // Load the cart from sessionStorage
    public loadCart(): Array<any> {
      const storedCart = sessionStorage.getItem('cart');
      if (storedCart) {
        return JSON.parse(storedCart);
      }
      return [];  // If no cart is stored, return an empty array
    }
  
    // Remove an item from the cart by index
    public removeFromCart(cart: Array<any>, index: number): void {
      cart.splice(index, 1);
      this.saveCart(cart); // Update sessionStorage after removing an item
    }

    public clearCart(): void {
        sessionStorage.removeItem('cart');
      }
  }