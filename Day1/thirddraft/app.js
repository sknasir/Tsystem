

// 1. Define Angularjs Module

var app=angular.module("transflower",[]);

app.controller("LoginController",function($scope){
  
    $scope.user={
       email:"nasir@gmail.com",
       password:"1234"
   };
  

   $scope.users=[
    { email:"nasir@gmail.com", password:"123"},
    { email:"vaibhav@gmail.com", password:"1234"},
    { email:"swapnil@gmail.com", password:"12345"},
    { email:"pravin@gmail.com", password:"123456"}

   ];


    $scope.onValidate=function()
    {

        if($scope.user.email=="nasir@gmail.com" && $scope.user.password=="1234"){
           console.log("Welcome");
           alert("Welcome");
        }
         else{
           console.log("Invalid");
           alert("Invalid");
        }      


    }

});

app.controller("ProductController",function($scope){
  


   $scope.products=[
    { id : "1" ,  title:"Mobile" , price : "56000" ,image:"https://via.placeholder.com/100?text=Mobile" },
    {  id : "2" , title:"Laptop" , price : "79000" ,image:"https://via.placeholder.com/100?text=Laptop" },
    {  id : "3" , title:"Tablet" , price : "23000" ,image:"https://via.placeholder.com/100?text=Tablet" },
   ];

   
});