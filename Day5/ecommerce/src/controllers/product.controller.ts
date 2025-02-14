import * as angular from 'angular';
import { ProductService } from '../services/product.service';

export class ProductController {
  static $inject = ['$scope', '$location', '$routeParams','ProductService'];
  message: string;
  catalogs: Array<any>;
  selectedProduct: any;


  constructor(private $scope: IDataScope, private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService,private productservice : ProductService) {
    this.message = 'Welcome to TypeScript!';
    // Fetch catalogs from ProductService
    this.catalogs = this.productservice.getCatalogs();

    const productId = $routeParams['productId'];
    if (productId) {
      this.selectedProduct = this.productservice.getProductById(Number(productId));
    } else {
      this.selectedProduct = null;
    }

    $scope['data'] = this;
  }

  // Function to add product to the cart
  public addToCart(product: any): void {
    console.log('Product added to cart:', product);
    this.productservice.addToCart(product);
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