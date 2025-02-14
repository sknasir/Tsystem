
export class Authservice{


  private authUsers: Array<any> = [
    { email: 'nasir@gmail.com', password: "12345" },
    { email: 'rakesh@gmail.com', password: "123456" },
    { email: 'akshay@gmail.com', password: "1234567" },
    { email: 'swapnil@gmail.com', password: "12345678" },
  ];

  constructor() { }

  // Method to validate user credentials
  public validateUser(username: string, password: string): boolean {
    let userFound = false;

    for (let user of this.authUsers) {
        if (user.email === username && user.password === password) {
            userFound = true;    
            sessionStorage.setItem('auth', JSON.stringify(user));       
            break; // Exit the loop once we find a match
        }
    }   
    return userFound;
  }

  public getuserdetails() : Array<any> {

    const storedCart = sessionStorage.getItem('auth');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];  // If no cart is stored, return an empty array
  }

}