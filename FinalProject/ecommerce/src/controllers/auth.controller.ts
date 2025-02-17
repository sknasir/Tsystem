import * as angular from 'angular';
import { Authservice } from '../services/auth.service';
import { CheckoutService } from '../services/checkout.service';

export class AuthController {
  static $inject = ['$scope', '$location','Authservice','CheckoutService'];
  public userinfo : any;
  message: string;
  public username: string;
  public password: string;

  constructor(private $scope: IDataScope, private $location: angular.ILocationService,private authservice : Authservice,private checkoutService: CheckoutService) {
    this.message = "";
    this.username = "";
    this.password = "";
    this.checkAuth();
    $scope['data'] = this;
  }
  
    public login() {
      this.authservice.login(this.username, this.password)
        .then((response: any) => {
          // Check if response contains the message
          this.message = response.message; // Success message from backend
          
          if(this.checkoutService.isCart()){
            this.checkoutService.CartReady();
            this.$location.path('/cart'); // Redirect to product
          }
          else{
            this.$location.path('/product'); // Redirect to product
          }

         
        })
        .catch((error: any) => {
          // Handle error message from backend
          this.message = error.message || 'Something went wrong!';
        });
    }

    public checkAuth()
    {
      const userDetails =this.authservice.getuserdetails();   
      this.userinfo=userDetails;

      if(this.userinfo){       
        this.username = this.userinfo.email;
        this.password = this.userinfo.password;
      }

    }

}
