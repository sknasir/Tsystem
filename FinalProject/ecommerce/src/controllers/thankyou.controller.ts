

export class ThankYouController {
  static $inject = ['$scope'];

  message: string;

  constructor(private $scope: IDataScope) {
    this.message = 'Thank you for your purchase! Your order has been successfully processed.';

    // Expose the data to the scope for the view
    $scope['data'] = this;
  }
}
