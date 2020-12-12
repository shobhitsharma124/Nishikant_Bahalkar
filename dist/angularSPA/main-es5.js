function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <style>\n    .sidenav {\n  height: 100%; /* Full-height: remove this if you want \"auto\" height */\n  width: 250px; /* Set the width of the sidebar */\n   /* Fixed Sidebar (stay in place on scroll) */\n  z-index: 1; /* Stay on top */\n  top: 0; /* Stay at the top */\n  left: 0;\n  background-color :skyblue; /* Black */\n  overflow-x: hidden; /* Disable horizontal scroll */\n  padding-top: 20px;\n}\n\n/* The navigation menu links */\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n}\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n/* Style page content */\n.main {\n  margin-left: 160px; /* Same as the width of the sidebar */\n  padding: 0px 10px;\n}\n\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n  </style>\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col md-6\">\n        <img src=\"https://cdn.dribbble.com/users/1268263/screenshots/2925243/casparnonner_absfitness_logo_1a.png\" \n        class=\"img-fluid\"\n         alt=\"Logo\"\n         style=\"width:40%\">\n      </div>\n      <div class=\"col md-8\">\n        <h1>ABS Fitness Centre</h1>\n      </div>\n    </div>\n  </div>\n<nav class=\"navbar navbar-expand-sm bg-primary navbar-light\">\n<ul class=\"navbar-nav\">\n  <li class=\"nav-item active\">\n    <button class=\"btn btn-light ml-2 nav-link\" (click)=\"landingpage()\">Home</button>\n  </li>\n  <li class=\"nav-item active\">\n    <button class=\"btn btn-light ml-2 nav-link\" (click)=\"placeAppointment()\">Place Appointment</button>  \n  </li>\n  <li class=\"nav-item active\">\n    <button class=\"btn btn-light ml-2 nav-link\" (click)=\"viewAppointment()\">View Appointment</button>\n  </li>\n  <li class=\"nav-item active\">\n    <button class=\"btn btn-light ml-2 nav-link\" (click)=\"contactUspage()\">Contact Us</button>\n  </li>\n</ul>\n</nav>\n<br>\n<div class=\"row\">\n  <div class=\"col-xl-3\">\n    <div class=\"sidenav\">\n      <button class=\"btn btn-light ml-2 btn-lg \" (click)=\"landingpage()\">Home</button>\n      <br><br>\n      <button class=\"btn btn-light ml-2 btn-lg\" (click)=\"placeAppointment()\">Place Appointment</button>  \n      <br><br>\n      <button class=\"btn btn-light ml-2 btn-lg\" (click)=\"viewAppointment()\">View Appointment</button>\n      <br><br>\n      <button class=\"btn btn-light ml-2 btn-lg\" (click)=\"contactUspage()\">Contact Us</button>\n      <br><br>\n    </div>\n  </div>\n  <div class=\"col-xl-9\">\n    <router-outlet></router-outlet>\n    <hr>\n    <button class=\"btn btn-danger btn-lg\" (click)=\"contactUspage()\">Apply For Trainer</button>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactUsContactUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n    <label>Contact-us</label>\n    <div class=\"form-group\">\n        <label for=\"exampleInputfirstname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.firstname.touched && contactForm.controls.firstname.errors?.required\">\n            Please enter first name.!\n        </small>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputlastname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.lastname.touched && contactForm.controls.lastname.errors?.required\">\n            Please enter last name.!\n        </small>\n    </div>\n\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputphonenumber\">Phone Number</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"phonenumber\" placeholder=\"Phone Number\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.phonenumber.touched && contactForm.controls.phonenumber.errors?.required\">\n            Please enter phone number.!\n        </small>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"exampleInputemail\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Eamil\">\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.required\">\n            Please enter email.!\n        </small>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\">\n            Enter the valid email .!\n        </small>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputmessage\">Message</label>\n        <textarea type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Message\"></textarea>\n        <small class=\"form-text text-muted\"\n            *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\">\n            Please enter message.!\n        </small>\n\n    </div>\n    <button type=\"submit\" >Submit</button>\n\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n<div class=\"introtext\">\n    <h1>ABS Fitness Center</h1>\n    <div>\n    <img src=\"https://cdn.dribbble.com/users/1268263/screenshots/2925243/casparnonner_absfitness_logo_1a.png\" >\n    </div>\n<br>\n<!---div>\n    <button class=\"btn-primary\" (click)=\"navpage()\">Apply For Trainer</button>\n</div>-->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlaceFitnessTrainerAppointmentPlaceFitnessTrainerAppointmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n    <form [formGroup]=\"fitnessForm\" (ngSubmit)=\"onSubmit()\" #f>\n        <div class=\"form-group row\">\n        <div class=\"col-xl-4 ml-2\">\n        <label for=\"exampleInputfirstname\">First Name</label>\n        <input type=\"text\" class=\"form-control \" formControlName=\"firstname\" placeholder=\"First Name\" ngModel>\n        </div>\n        <div class=\"col-xl-5 ml-1\">\n        <label for=\"exampleInputlasttname\">Last Name</label>\n        <input type=\"text\" class=\"form-control \" formControlName=\"lastname\" placeholder=\"Last Name\">\n        </div>\n        </div>\n\n\n\n        <div class=\"form-group row\">\n        <div class=\"col-xl-9 ml-2\">\n            <label for=\"saddress\" >Shipping Address</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"saddress\" placeholder=\"Street Address\">\n            <label for=\"saddress\" >Street Address</label>\n        </div>\n        </div>\n\n        <div class=\"form-group row\">\n                <div class=\"col-xl-4 ml-2\">\n                <input type=\"text\" class=\"form-control \" formControlName=\"city\" placeholder=\"City\" >\n                <label for=\"exampleInputCity\">City</label>\n                </div>\n                <div class=\"col-xl-5 ml-2\">\n                <input type=\"text\" class=\"form-control \" formControlName=\"state\" placeholder=\"State\">\n                <label for=\"exampleInputState\">State</label>\n                </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-xl-4 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"country\" placeholder=\"Country\">\n            <!--select>\n                <option value=\"ind\">India</option>\n                <option value=\"pak\">Pakistan</option>\n                <option value=\"nep\">Nepal</option>\n            </select>-->\n            <label for=\"exampleCountry\">Country</label>\n            </div>\n            <div class=\"col-xl-5 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"pin\" placeholder=\"Pincode\">\n            <label for=\"examplepincode\">Pincode</label>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"Buyersname\">Buyers Name</label>\n            </div>\n            <div class=\"col-xl-4 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"bfirstname\" placeholder=\"First\" >\n            <label for=\"BuyInputfirstname\">First Name</label>\n            </div>\n            <div class=\"col-xl-4 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"blastname\" placeholder=\"Last\">\n            <label for=\"BuyInputlasttname\">Last Name</label>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"examplemobile\">Mobile Number</label>\n            </div>\n            <div class=\"col-xl-8 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"Mobile\" placeholder=\"(0123-456-789)\" >\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-2 ml-2\">\n                <label for=\"exampleEmail\">Email-ID</label>\n            </div>\n            <div class=\"col-xl-4 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"email\" placeholder=\"Email\" >\n            </div>\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"exampleage\">Age</label>\n            </div>\n            <div class=\"col-xl-2 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"age\" placeholder=\"Age\" >\n            </div>\n        </div>\n\n        <div class=\" form-group row \">\n            <div class=\"col-xl-2 ml-1\">\n                <label for=\"exampletrainer\">Trainer Choice</label>\n            </div>\n        </div>\n            \n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"examplemale\">Male</label>\n            </div> \n            <div class=\"col-xs-1 ml-2\">\n            <input type=\"radio\" class=\"form-control \"formControlName=\"pchoice\" name=\"pchoice\" value=\"Male\">\n            </div>\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"examplefemale\">Female</label>\n            </div> \n            <div class=\"col-xs-1 ml-2\">\n            <input type=\"radio\" class=\"form-control \"formControlName=\"pchoice\" name=\"pchoice\" value=\"Female\">\n            </div>\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"exampleno\">No Choice</label>\n            </div> \n            <div class=\"col-xs-1 ml-2\">\n            <input type=\"radio\" class=\"form-control \" formControlName=\"pchoice\" name=\"pchoice\" value=\"No\">\n            </div>   \n        </div>\n\n        <div class=\" form-group row \">\n            <div class=\"col-xl-3 ml-1\">\n                <label for=\"examplephysio\">Do you want a PhysioTherapist</label>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"exampleyesphy\">Yes</label>\n            </div> \n            <div class=\"col-xs-1 ml-2\">\n            <input type=\"radio\" class=\"form-control\" formControlName=\"choice\" name=\"phy\" value=\"yes\">\n            </div>\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"examplenophy\">No</label>\n            </div> \n            <div class=\"col-xs-1 ml-2\">\n            <input type=\"radio\" class=\"form-control\" formControlName=\"choice\" name=\"phy\" value=\"no\">\n            </div>\n        </div>\n\n        <div class=\" form-group row \">\n            <div class=\"col-xl-3 ml-1\">\n                <label for=\"examplepkg\">Select a Package</label>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <input type=\"radio\" class=\"form-control\" formControlName=\"sess\" name=\"sess\" value=\"one\" >\n                </div>\n            <div class=\"col-xl-6 ml-2\">\n                <label for=\"exampleInputfirstname\">One time Assesment Only(rs 500)</label>\n            </div> \n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <input type=\"radio\" class=\"form-control\" formControlName=\"sess\" name=\"sess\" value=\"four\">\n                </div>\n            <div class=\"col-xl-6 ml-2\">\n                <label for=\"exampleInputfirstname\">4 sessions Per Week(400 per session)</label>\n            </div> \n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <input type=\"radio\" class=\"form-control\" formControlName=\"sess\"  name=\"sess\" value=\"five\" >\n                </div>\n            <div class=\"col-xl-6 ml-2\">\n                <label for=\"exampleInputfirstname\">5 sessions Per Week(300 per session)</label>\n            </div> \n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <input type=\"radio\" class=\"form-control\" formControlName=\"sess\" name=\"sess\" value=\"other\" >\n                </div>\n            <div class=\"col-xs-3 ml-3\">\n                <label for=\"exampleInputfirstname\">Other</label>\n            </div> \n            <div class=\"col-xl-3 ml-4\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"otheramt\" placeholder=\"other\">   \n            </div> \n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col-xl-1 ml-2\">\n                <label for=\"exampleInputfirstname\">Amount</label>\n            </div>\n            <div class=\"col-xl-4 ml-2\" >\n            <input type=\"text\" class=\"form-control \" formControlName=\"rupees\" placeholder=\"500\" *ngIf=\"f.sess.value==='one'\" value=\"500\" >\n            <input type=\"text\" class=\"form-control \" formControlName=\"rupees\" placeholder=\"1600\" *ngIf=\"f.sess.value==='four'\" value=\"1600\" >\n            <input type=\"text\" class=\"form-control \" formControlName=\"rupees\" placeholder=\"1500\" *ngIf=\"f.sess.value==='five'\" value=\"1500\" >\n            <input type=\"text\" class=\"form-control \" formControlName=\"rupees\" placeholder=\"other\" *ngIf=\"f.sess.value==='other'\" value=\"f.otheramt.value\" >\n            </div>\n            <div class=\"col-xl-4 ml-2\">\n            <input type=\"text\" class=\"form-control \" formControlName=\"paise\" placeholder=\"Paise\">\n            </div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">\n            Submit Form \n        </button>\n    </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewAppointmentViewAppointmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <h2>Appointment Details Chart</h2>\n    <form class=\"form-inline\" [formGroup]=\"search\" (ngSubmit)=\"onSearch()\">\n        <input  type=\"search\" placeholder=\"Enter M or F or N\" aria-label=\"Search\"  class=\"form-control\" formControlName=\"value\">\n        <button type=\"button\" class=\"btn btn-danger btn-lg\" type=\"submit\" click=\"onSearch()\">Search</button>\n      </form>\n    <table class=\"table table-striped table-dark\">\n        <thead>\n            <tr>\n                <th>Sr.No</th>\n                <th>Name</th>\n                <th>Last Name</th>\n                <th>City</th>\n                <th>Package</th>\n                <th>Trainer Preference</th>\n                <th>Phone</th>\n            </tr>\n        </thead> \n        <tbody  > \n            <tr mdbTableCol *ngFor=\"let ap of app1; let i=index\" >\n                <td>{{i+1}}</td>\n                <td>{{ ap.firstname}} </td>\n                <td>{{ ap.lastname}} </td>\n                <td>{{ ap.city}} </td>\n                <td>{{ ap.sess}} </td>\n                <td>{{ ap.pchoice}} </td>\n                <td>{{ ap.Mobile}} </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Shared/shared.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Shared/shared.service.ts ***!
    \******************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.appointments = [];
      }

      _createClass(SharedService, [{
        key: "addData",
        value: function addData(appointment) {
          this.appointments.push(appointment);
        }
      }, {
        key: "fetchData",
        value: function fetchData() {
          return this.appointments;
        }
      }]);

      return SharedService;
    }();

    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SharedService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-appointment/view-appointment.component */
    "./src/app/view-appointment/view-appointment.component.ts");
    /* harmony import */


    var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */
    "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");

    var routes = [{
      path: "landing-page",
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }, {
      path: "place-fitness-trainer-appointment",
      component: _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__["PlaceFitnessTrainerAppointmentComponent"]
    }, {
      path: "view-appointment",
      component: _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__["ViewAppointmentComponent"]
    }, {
      path: "contact-us",
      component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"]
    }, {
      path: "**",
      redirectTo: "landing-page"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'angularSPA';
      }

      _createClass(AppComponent, [{
        key: "landingpage",
        value: function landingpage() {
          this.router.navigateByUrl("landing-page");
        }
      }, {
        key: "placeAppointment",
        value: function placeAppointment() {
          this.router.navigateByUrl("place-fitness-trainer-appointment");
        }
      }, {
        key: "viewAppointment",
        value: function viewAppointment() {
          this.router.navigateByUrl("view-appointment");
        }
      }, {
        key: "contactUspage",
        value: function contactUspage() {
          this.router.navigateByUrl("contact-us");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-us/contact-us.component */
    "./src/app/contact-us/contact-us.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/landing-page/landing-page.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */
    "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");
    /* harmony import */


    var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-appointment/view-appointment.component */
    "./src/app/view-appointment/view-appointment.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"], _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"], _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
      exports: [_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"], _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-us/contact-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/contact-us/contact-us.component.ts ***!
    \****************************************************/

  /*! exports provided: Contact, ContactUsComponent */

  /***/
  function srcAppContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var Contact = function Contact(firstname, lastname, phonenumber, email, message) {
      _classCallCheck(this, Contact);

      this.firstname = firstname;
      this.lastname = lastname;
      this.phonenumber = phonenumber;
      this.email = email;
      this.message = message;
    };

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent(fb) {
        _classCallCheck(this, ContactUsComponent);

        this.fb = fb;
        this.contactdata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.obj = {};
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contactForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonenumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.obj = Object.assign({}, this.contactForm.value, this.obj);
          this.contactForm.value;
          console.log("LOG: LoginComponent -> onSubmit -> this.contactForm.value", this.contactForm.value);

          if (this.contactForm.valid) {
            this.contactdata.emit(new Contact(this.contactForm.value.firstname, this.contactForm.value.lastname, this.contactForm.value.phonenumber, this.contactForm.value.email, this.contactForm.value.message));
          }
        }
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ContactUsComponent.prototype, "contactdata", void 0);
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-us',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], ContactUsComponent);
    /***/
  },

  /***/
  "./src/app/landing-page/landing-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page/landing-page.component.ts ***!
    \********************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(router) {
        _classCallCheck(this, LandingPageComponent);

        this.router = router;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navpage",
        value: function navpage() {
          this.router.navigateByUrl("place-gift-card-order-page");
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: Fitness, PlaceFitnessTrainerAppointmentComponent */

  /***/
  function srcAppPlaceFitnessTrainerAppointmentPlaceFitnessTrainerAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fitness", function () {
      return Fitness;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceFitnessTrainerAppointmentComponent", function () {
      return PlaceFitnessTrainerAppointmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Shared/shared.service */
    "./src/app/Shared/shared.service.ts");

    var Fitness = function Fitness(rupees, paise, other, otheramt, sess, yeschoice, nochoice, malechoice, femalechoice, nomf, saddress, city, state, country, pin, Mobile, email, firstname, lastname, bfirstname, blastname, age) {
      _classCallCheck(this, Fitness);

      this.rupees = rupees;
      this.paise = paise;
      this.other = other;
      this.otheramt = otheramt;
      this.sess = sess;
      this.yeschoice = yeschoice;
      this.nochoice = nochoice;
      this.malechoice = malechoice;
      this.femalechoice = femalechoice;
      this.nomf = nomf;
      this.saddress = saddress;
      this.city = city;
      this.state = state;
      this.country = country;
      this.pin = pin;
      this.Mobile = Mobile;
      this.email = email;
      this.firstname = firstname;
      this.lastname = lastname;
      this.bfirstname = bfirstname;
      this.blastname = blastname;
      this.age = age;
    };

    var PlaceFitnessTrainerAppointmentComponent = /*#__PURE__*/function () {
      function PlaceFitnessTrainerAppointmentComponent(shared, f) {
        _classCallCheck(this, PlaceFitnessTrainerAppointmentComponent);

        this.shared = shared;
        this.f = f;
        this.FitnessData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ob = {};
        this["package"] = [500, 1600, 1500];
      }

      _createClass(PlaceFitnessTrainerAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fitnessForm = this.f.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z][a-zA-Z ]+")]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z][a-zA-Z ]+")]],
            rupees: [""],
            paise: [""],
            otheramt: [""],
            sess: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            choice: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pchoice: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            saddress: [""],
            city: [""],
            state: [""],
            country: [""],
            pin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]],
            Mobile: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            bfirstname: [""],
            blastname: [""],
            age: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(60)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log("submitted");
          console.log(this.fitnessForm.invalid);

          if (this.fitnessForm.valid) {
            this.ob = Object.assign({}, this.fitnessForm.value, this.ob);
            this.appoint = this.fitnessForm.value;
            this.shared.addData(this.appoint);
          }
        }
      }, {
        key: "m",
        get: function get() {
          return this.fitnessForm.controls;
          console.log(this.fitnessForm.controls);
        }
      }]);

      return PlaceFitnessTrainerAppointmentComponent;
    }();

    PlaceFitnessTrainerAppointmentComponent.ctorParameters = function () {
      return [{
        type: _Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], PlaceFitnessTrainerAppointmentComponent.prototype, "FitnessData", void 0);
    PlaceFitnessTrainerAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-place-fitness-trainer-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-fitness-trainer-appointment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], PlaceFitnessTrainerAppointmentComponent);
    /***/
  },

  /***/
  "./src/app/view-appointment/view-appointment.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/view-appointment/view-appointment.component.ts ***!
    \****************************************************************/

  /*! exports provided: ViewAppointmentComponent */

  /***/
  function srcAppViewAppointmentViewAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function () {
      return ViewAppointmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Shared/shared.service */
    "./src/app/Shared/shared.service.ts");

    var ViewAppointmentComponent = /*#__PURE__*/function () {
      function ViewAppointmentComponent(shared, fb) {
        _classCallCheck(this, ViewAppointmentComponent);

        this.shared = shared;
        this.fb = fb;
        this.app = [];
        this.app1 = [];
        this.search = this.fb.group({
          value: [""]
        });
      }

      _createClass(ViewAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.app = this.shared.fetchData();
          console.log(this.app);
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          console.log(this.search.value);

          if (this.search.value.value == "M") {
            this.app1 = this.app.filter(function (c) {
              return c.pchoice == "Male";
            });
          }

          if (this.search.value.value == "F") {
            this.app1 = this.app.filter(function (c) {
              return c.pchoice == "Female";
            });
          }

          if (this.search.value.value == "N") {
            this.app1 = this.app.filter(function (c) {
              return c.pchoice == "No";
            });
          }
        }
      }, {
        key: "getfitness",
        value: function getfitness() {}
      }]);

      return ViewAppointmentComponent;
    }();

    ViewAppointmentComponent.ctorParameters = function () {
      return [{
        type: _Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-appointment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-appointment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html"))["default"]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], ViewAppointmentComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\xoriantcs11\Downloads\angular_case\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map