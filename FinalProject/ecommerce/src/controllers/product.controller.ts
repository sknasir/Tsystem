import * as angular from 'angular';
import { ProductService } from '../services/product.service';

export class ProductController {
  static $inject = ['$scope', '$location', '$routeParams','ProductService'];
  message: string;
  catalogs: any;
  selectedProduct: any;


  constructor(private $scope: IDataScope, private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService,private productservice : ProductService) {
    this.message = 'Welcome to TypeScript!';
    // Fetch catalogs from ProductService
    this.fetchCatalogs();   
    // Fetch the product by ID if productId is present in the route params
    const productId = $routeParams['productId'];
    if (productId) {
      this.fetchProductById(Number(productId));
    } else {
      this.selectedProduct = null;
    }

    $scope['data'] = this;
  }
   
  
// Fetch catalogs from the product service
fetchCatalogs() {
  this.productservice.getCatalogs()
    .then((response: any) => {
      this.catalogs = response.data;  // Assuming your API returns 'data'
    })
    .catch((error: any) => {
      console.error('Error fetching catalogs:', error);
    });
}

// Fetch a product by ID from the product service
fetchProductById(productId: number) {
  debugger
  this.productservice.getProductById(productId)
    .then((response: any) => {
      this.selectedProduct = response.data;  // Assign the fetched product to the selectedProduct
    })
    .catch((error: any) => {
      console.error('Error fetching product by ID:', error);
    });
}

  // Function to add product to the cart
  public addToCart(product: any): void {
    console.log('Product added to cart:', product);
    this.productservice.addToCart(product);   
    alert("Product added to cart");
  }

  // Function to add product to the cart
  public addToCartDetails(product: any): void {
    console.log('Product added to cart:', product);
    this.productservice.addToCartDetails(product);
    this.$location.path('/cart'); // Redirect to catalog page
  }

  

  // Function to navigate to the details page for a product
  public viewProductDetails(productId: number): void {
    this.$location.path(`/product/${productId}`);
  }
}