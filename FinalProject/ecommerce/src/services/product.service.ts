import { IHttpService } from 'angular'

export class ProductService
{
  private apiUrl = 'http://localhost:3000/api/'; // Backend API URL

    constructor(private $http: IHttpService) { }    

    // Method to get all products
  public getCatalogs(): ng.IPromise<any> {
      debugger
      return this.$http.get(this.apiUrl+"catalogs")
        .then((response: any) => response)
        .catch((error: any) => {
          console.error('Error occurred:', error);
          throw error;
        });
  }   
    
     // Method to get a product by its ID
  public getProductById(productId: number)
  {      
      debugger
      return this.$http.get(this.apiUrl+"catalogs/"+productId)
        .then((response: any) => response)
        .catch((error: any) => {
          console.error('Error occurred:', error);
          throw error;
        });      
  }

    // Method to add a product to the cart (using sessionStorage)
  public addToCart(product: any): void {
    debugger
    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');

    const existingProduct = cart.find((item: any) => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1;  // If product exists, increase its quantity
    } else {
      product.quantity = 1;  // Set quantity to 1 if it's a new product
      cart.push(product);  // Add the product to the cart
    }
  
    sessionStorage.setItem('cart', JSON.stringify(cart));


    //cart.push(product);
    // sessionStorage.setItem('cart', JSON.stringify(cart));
  }

  public addToCartDetails(product: any): void {
    let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
     cart.push(product);
     sessionStorage.setItem('cart', JSON.stringify(cart));     
  }
}