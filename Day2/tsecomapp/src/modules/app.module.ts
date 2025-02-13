import  * as angular from "angular"
import { MyController } from "../controllers/app.controller";
import { ProductController } from "../controllers/product-catalog";

angular.module('myApp', [])
.controller('MyController',MyController)
.controller('ProductController',ProductController);