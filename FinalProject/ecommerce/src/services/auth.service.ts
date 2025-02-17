import { IHttpService } from 'angular';
import { CheckoutService } from './checkout.service';

export class Authservice {

  
  private apiUrl = 'http://localhost:3000/api/login'; // Backend API URL

  constructor(private $http: IHttpService) { }

   // Method to authenticate users
   login(email: string, password: string) {
    const credentials = { email, password };
    
    return this.$http.post(this.apiUrl, credentials)
      .then((response: any) => {
        // Ensure the response has a 'message' field
        if (response.data && response.data.message) {
          sessionStorage.setItem('auth', JSON.stringify(credentials)); 
          return response.data;
        } else {
          throw new Error('Message not found in response');
        }
      })
      .catch((error: any) => {
        // Log the error and return a default message if error structure is different
        console.error('Error occurred:', error);
        throw new Error(error.data?.message || 'An error occurred');
      });
  }
 
  public getuserdetails() : Array<any> {

    const storedCart = sessionStorage.getItem('auth');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];  // If no cart is stored, return an empty array
  }

}