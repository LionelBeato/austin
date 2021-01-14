// require('./another.js');
// require("../css/style.css");

import $ from "jquery";
import moment from "moment";
import { sayHello } from "./another.js";
import "../css/style.css";

let time = moment().format('LT'); 

console.log(time);