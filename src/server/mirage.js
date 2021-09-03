import { Server, Model } from "miragejs";
import jargons from "./fixtures/jargons";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AppleIcon from "@material-ui/icons/Apple";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

export function createServer({ environment = "development" } = {}) {
  return new Server({
    environment,

    models: {
      jargon: Model,
    },

    /*
    seeds(server) {
        server.db.loadData({
            jargons: [
            { "name": "Ajax", "description": "a technology for asynchronous HTTP requests" },
            { "name": "AMD", "description": "a standard defining how to load JavaScript libraries or modules asynchronously" },
            { "name": "AngularJS", "description": "a structural framework for dynamic web apps" },
            { "name": "Apache Cordova", "description": "a popular mobile application development framework originally created by Nitobi" },
            { "name": "Arity", "description": "the number of arguments of a function" },
            { "name": "Babel", "description": "a JavaScript transformation toolkit which started as an ECMAScript 2015 / ES6 code translator (transpiler)" },
            { "name": "Backbone", "description": "a structural framework for dynamic web apps" },
            { "name": "BEM", "description": "a methodology and libraries developed and used at Yandex for building user interfaces" },
            { "name": "Bluebird", "description": "a fully featured Promise library with focus on innovative features and performance" },
            { "name": "Bower", "description": "a package manager for front-end dependencies" },
            { "name": "Broccoli", "description": "a fast and reliable asset pipeline" },
            { "name": "Browserify", "description": "a tool making possible to use the `require` function from Node.js within the browser" },
            { "name": "Brunch", "description": "a tool focusing on the production of deployment-ready files from development files" },
            { "name": "Canvas", "description": "an HTML element for graphic applications in 2D or 3D" },
            { "name": "Chai", "description": "an assertion library used with a JavaScript testing framework" },
            { "name": "Chakra", "description": "a JavaScript engine developed by Microsoft for its Edge browser which could also be used with Node.js instead of V8." },
            { "name": "Closure", "description": "a way of referencing variables from a child function while retaining their value even if it changes in the parent function" },
            { "name": "Closure Compiler", "description": "a JavaScript checker and optimizer" },
            { "name": "Coffeescript", "description": "a language that compiles into JavaScript" },
            { "name": "CommonJS", "description": "a project with the goal of specifying an ecosystem for JavaScript outside the browser (for example, on the server or for native desktop applications)" },
            { "name": "CORS", "description": "a way for a server to make things accessible to pages hosted on other domains" },
            { "name": "CouchDB", "description": "a NoSQL database with JavaScript as query language and HTTP as API" },
            { "name": "Currying", "description": "the process to transform a function with multiple parameters into a chain of functions of one parameter" },
            { "name": "D3.js", "description": "a library for manipulating documents based on data" },
            { "name": "Design Patterns", "description": "a general reusable solution to a commonly occurring problem within a given context in software design" },
            { "name": "DOM", "description": "a platform- and language-neutral interface that allow programs and scripts to dynamically access and update the content, structure and style of documents" },
            { "name": "ECMAScript (ES)", "description": "the standardized specification of the scripting language used by JavaScript" },
            { "name": "Electron", "description": "a framework based on Node.js lets you write cross-platform desktop applications using JS, HTML and CSS" },
            { "name": "Ember", "description": "an application framework based on the model-view-controller pattern" },
            { "name": "Enzyme", "description": "a JavaScript Testing utility for React developed by AirBnB that makes it easier to assert, manipulate, and traverse React components’ output." },
            { "name": "ESLint", "description": "a JavaScript code linter" },
            { "name": "Express", "description": "a fast, un-opinionated, minimalist web framework for Node.js" },
            { "name": "Ext JS", "description": "a pure JavaScript application framework for building interactive cross platform web applications" },
            { "name": "Facade Pattern", "description": "a software design pattern commonly used with object-oriented programming. The name is by analogy to an architectural facade" },
            { "name": "Factory Pattern", "description": "a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created" },
            { "name": "Falcor", "description": "a JavaScript library for efficient data fetching" },
            { "name": "Flow", "description": "a static type checker, designed to find type errors in JavaScript programs" },
            { "name": "Flux", "description": "an application structure focusing on improved data flow" },
            { "name": "Four", "description": "a framework to develop 3D content for the web" },
            { "name": "Grunt", "description": "a task runner aiming at automating tedious and possibly complex tasks" },
            { "name": "Gulp", "description": "a task runner aiming at automating tedious and possibly complex tasks" },
            { "name": "Hapi", "description": "a Node JS framework for writing services and more" },
            { "name": "Hoisting", "description": "an action performed by the JavaScript interpreter that moves function and variable declarations to the top of their containing scope" },
            { "name": "IIFE", "description": "a function that gets called immediately after declaration" },
            { "name": "Ionic", "description": "a HTML5 mobile framework to build beautiful hybrid native mobile applications using AngularJS and Cordova" },
            { "name": "Isomorphic", "description": "an application is said to be isomorphic (universal) when its code can run both in the client and the server" },
            { "name": "Jasmine", "description": "a testing framework for BDD (Behaviour-Driven Development)" },
            { "name": "Jest ", "description": "A unit testing framework" },
            { "name": "jQuery", "description": "a fast, small, and feature-rich client-side library" },
            { "name": "JSCS", "description": "a JavaScript code linter" },
            { "name": "JSHint", "description": "a JavaScript code linter" },
            { "name": "JSLint", "description": "a JavaScript code linter" },
            { "name": "JSON-LD", "description": "JSON for Linked Data" },
            { "name": "JSON", "description": "a lightweight data-interchange format" },
            { "name": "JSPM", "description": "like npm with its own build system and multiple resources management" },
            { "name": "JSX", "description": "an XML-like syntax extension to JavaScript" },
            { "name": "Knockout", "description": "a library that helps developers creating user interfaces with a clean underlying data model" },
            { "name": "LocalForage", "description": "a fast and simple storage library for JavaScript" },
            { "name": "Lodash", "description": "an utility toolkit to extend JavaScript primitive types" },
            { "name": "MEAN", "description": "the technology stack MongoDB, ExpressJS, AngularJS, and Node.js (MEAN)" },
            { "name": "Mediator Pattern", "description": "an object that encapsulates how a set of objects interact" },
            { "name": "Memoize", "description": "an optimization used to speed up consecutive function calls by caching the result of calls with identical input" },
            { "name": "Metalsmith", "description": "a simple, pluggable static site generator" },
            { "name": "Meteor", "description": "a JavaScript web framework that allows rapid prototypic web development" },
            { "name": "Mocha", "description": "an extensible testing framework for TDD (Test-Driven Development) or BDD (Behaviour-Driven Development)" },
            { "name": "Modernizr", "description": "a browser feature detection library, useful to modify page styles when a feature is not available in the browser" },
            { "name": "Module Pattern", "description": "a design pattern used to implement the concept of software modules, defined by modular programming, in a programming language with incomplete direct support for the concept" },
            { "name": "Moment.js", "description": "a library to parse, validate, manipulate and display dates" },
            { "name": "MongoDB", "description": "a Javascript NoSQL database" },
            { "name": "MooTools", "description": "a collection of JavaScript utilities designed for the intermediate to advanced JavaScript developer. It allows you to write powerful and flexible code with its elegant, well documented, and coherent APIs" },
            { "name": "Nightmare", "description": "a high-level browser automation library" },
            { "name": "NightwatchJS", "description": "a framework for browser automated testing" },
            { "name": "Node.js", "description": "a cross-platform runtime environment for developing server-side applications built on V8 engine" },
            { "name": "npm", "description": "a utility to help publishing packages to, and installing from, an npm repository" },
            { "name": "nvm", "description": "a utility to help run multiple versions of Node.js on the same machine" },
            { "name": "Observer Pattern", "description": "a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods" },
            { "name": "Passport.js", "description": "a simple authentication middleware" },
            { "name": "PhantomJS", "description": "a scripted, headless browser used for automating web page interaction" },
            { "name": "Polymer", "description": "Google’s library for creating Web Components" },
            { "name": "PostCSS", "description": "a tool to transform CSS styles using JavaScript plugins; plugins include autoprefixer, future CSS transpiling, CSS linting and media queries" },
            { "name": "Promise", "description": "a proxy for a value not necessarily known immediately but that will eventually be resolved" },
            { "name": "Prototype", "description": "a JavaScript framework that aims to ease development of dynamic web applications. It offers a familiar class-style OO framework, extensive Ajax support, higher-order programming constructs, and easy DOM manipulation" },
            { "name": "Prototype Pattern", "description": "a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects" },
            { "name": "Puppeteer ", "description": "a scripted, headless browser used for automating web page interaction" },
            { "name": "Pure Function", "description": "a functional programming paradigm that ensures that a function has some strict properties. " },
            { "name": "Q", "description": "a library to create and manage promises" },
            { "name": "QUnit", "description": "a powerful, easy-to-use JavaScript unit testing framework" },
            { "name": "Ramda", "description": "a practical functional library for JavaScript programmers" },
            { "name": "React", "description": "a library developed and used at Facebook for building user interfaces" },
            { "name": "Redux", "description": "a predictable state container for apps" },
            { "name": "RequireJS", "description": "a browser based module loader using AMD" },
            { "name": "Revealing Module Pattern", "description": "a design pattern conceptually based on the Module Pattern. The only difference is that the *revealing module pattern* was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed" },
            { "name": "rnpm", "description": "a package manager to ease React Native development" },
            { "name": "RxJS", "description": "a library for asynchronous programming using observable streams" },
            { "name": "Sails", "description": "a realtime MVC Framework for Node.js" },
            { "name": "Singleton Pattern", "description": "a design pattern that restricts the instantiation of a class to one object" },
            { "name": "Three.js", "description": "a lightweight 3D library to create and display animated 3D computer graphics on a Web browser" },
            { "name": "TypeScript", "description": "a super-set of the JavaScript language that introduces types" },
            { "name": "UMD", "description": "a pattern of universal module definition for JavaScript modules" },
            { "name": "Underscore", "description": "a swiss army knife, focusing on helper methods for most built-in objects" },
            { "name": "Universal", "description": "an application is said to be universal (isomorphic) when its code can run both in the client and the server" },
            { "name": "V8", "description": "Google’s open source JavaScript engine. It’s what Chrome is running, but it’s also used for other projects like Node.js and MongoDB" },
            { "name": "Vanilla", "description": "a term for library/framework free JavaScript" },
            { "name": "Virtual DOM", "description": "a pattern in which a JavaScript representation of the desired DOM is created and the framework sorts out the details of how to make it happen" },
            { "name": "VueJS", "description": "a library for creating user interfaces based on data models" },
            { "name": "WebGL", "description": "a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins" },
            { "name": "Webpack", "description": "a dependency manager with a friendly and fast development environment, simplifying a lot of common tasks" },
            { "name": "XHR", "description": "XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server without page refresh" },
            { "name": "Yeoman", "description": "a generator builder to speed up the setup and installation process of a project or part of a project" },
            { "name": "Zepto", "description": "a lightweight jQuery clone, without all the browser-compatibility specific code" }
          ],
        })
    },
    */

    fixtures: {
      jargons,
    },

    seeds(server) {
      server.loadFixtures();
    },

    routes() {
      this.post("/login", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        if (attrs["username"] == "sampleInvalidCredential") {
          return new Response(
            400,
            { some: "header", Location: "/" },
            { errors: ["Username does not exist"] }
          );
        } else {
          return {
            username: attrs["username"],
            accessToken: attrs["username"] + "_" + attrs["password"],
          };
        }
      });

      this.get("/landing/stores", () => {
        console.log(`returning store locations from backend`);
        return {
          storeLocations: ["Scarborough Town Center", "Markville Mall"],
          sidebar: [
            {
              key: 0,
              type: "SHORTCUTS",
              icon: "ExitToAppIcon",
              text: "SHORTCUTS",
              url: null,
              sublist: [],
              menu: [],
            },
            {
              key: 1,
              type: "PROMOS",
              icon: "CardGiftcardIcon",
              text: "PROMOS",
              url: null,
              menu: [
                {
                  type: "MENU",
                  text: "Add",
                  url: "",
                },
              ],
              sublist: [
                {
                  type: "PROMOCODE",
                  icon: "",
                  text: "CAS 1092",
                  url: null,
                },
                {
                  type: "PROMOCODE",
                  icon: "",
                  text: "CAS 1093",
                  url: null,
                },
              ],
            },

            {
              key: 2,
              type: "MESSAGES",
              icon: "MessageIcon",
              text: "MESSAGES",
              url: null,
              menu: [],
              sublist: [
                {
                  type: "MESSAGE",
                  icon: "",
                  text: "Logged in to Markville mall",
                  url: null,
                },
                {
                  type: "MESSAGE",
                  icon: "",
                  text: "Logged in as K.lam",
                  url: null,
                },
              ],
            },
            {
              key: 3,
              type: "SETTINGS",
              icon: "SettingsIcon",
              text: "SETTINGS",
              url: null,
              menu: [],
              sublist: [
                {
                  type: "SWITCH STORE",
                  icon: "LocationOnIcon",
                  text: "SWITCH STORE",
                  url: null,
                },
                // {
                //   type: "STARRED",
                //   icon: "",
                //   text: "STARRED",
                //   url: null,
                // },
                {
                  type: "LOGOUT",
                  icon: "",
                  text: "LOGOUT",
                  url: null,
                },
                {
                  type: "HELP",
                  icon: "",
                  text: "HELP",
                  url: null,
                },
                {
                  type: "ABOUT",
                  icon: "",
                  text: "ABOUT",
                  url: null,
                },
              ],
            },
          ],
          checkOutOption: [
            {
              key: 0,
              type: "CREDIT CARD",
              classname: "credit_card",
              icon: "CreditCardIcon",
              text: "CREDIT CARD",
              div_id:"creditcardOption",

              // component: <div id="creditcardOption"></div>,
            },
            {
              key: 1,
              type: "DEBIT CARD",
              classname: "debit_card",
              icon: "CreditCardIcon",
              text: "DEBIT CARD",
              div_id:"debitCardOption",

              // component: <div id="debitCardOption"></div>,
            },
            {
              key: 2,
              type: "APPLE PAY",
              icon: "AppleIcon",
              text: "APPLE PAY",
              div_id:"applePay",

              // component: <div id="applePay"></div>,
            },
            {
              key: 3,
              type: "GIFT CARD",
              icon: "CardGiftcardIcon",
              text: "GIFT CARD",
              div_id:"giftcard"
              // component: <div id="giftCard"></div>,
            },
            {
              key: 4,
              type: "CASH",
              icon: "AttachMoneyIcon",
              text: "CASH",
              div_id:"cash"
              // component: <div id="cash"></div>,
            },
            {
              key: 5,
              type: "US CASH",
              icon: "MonetizationOnIcon",
              text: "US CASH",
              div_id:"uscash"
              // component: <div id="uscash"></div>,
            },
            {
              key: 6,
              type: "RECEIPT OPTION",
              icon: "ReceiptIcon",
              text: " RECEIPT OPTION",
              div_id:"receipt"
              // component: <div id="receipt"></div>,
            },
                 
          ],
          storeProfile: {
            "OPEN POS": [
              {
                type: "PROMOS",
                icon: "CardGiftcardIcon",
                text: "PROMOS",
                url: null,
                sublist: null,
              },
              {
                type: "SHORTCUTS",
                icon: "ExitToAppIcon",
                text: "SHORTCUTS",
                url: null,
                sublist: null,
              },
            ],
            "START/STOP SHIFT": {},
            "STORE ADMIN": {},
          },
        };
      });

      //get message
      // this.get("/landing/message", () => {
      //   return {
      //     messages: ["Logged in Markville Mall", "Logged in  as k.Iam"],
      //   };
      // });
      //       this.get('https://www.techiediaries.com/api/data.json', (schema, request) => {
      //         console.log("get data from https://www.techiediaries.com/api/data.json");
      //         return schema.db.jargons;
      //       });

      //       this.get("/api/jargons/:pattern", (schema, request)  => {
      //         let pattern = request.params.pattern || "^V";
      //         console.log("get data with pattern " + pattern);
      //         const regex2 = new RegExp(pattern);
      //         return schema.db.jargons.filter(jargon => jargon.name.match(regex2));
      //       });

      //       this.get("/api/jargons", (schema)  => {
      //         console.log("get data with api/jargons");
      // //          return schema.db.jargons;
      //         return schema.jargons.all().models;
      //       });
    },
  });
}
