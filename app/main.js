System.register(['angular2/core', 'angular2/platform/browser', "angular2/http", "./client/to-service", "./client/to-list"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, http_1, to_service_1, to_list_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (to_service_1_1) {
                to_service_1 = to_service_1_1;
            },
            function (to_list_1_1) {
                to_list_1 = to_list_1_1;
            }],
        execute: function() {
            // import {ToLed} from "./client/to-Led";
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [http_1.HTTP_PROVIDERS],
                        //  directives: [ToLed],
                        directives: [to_list_1.LedList],
                        template: "\n    <div align=\"center\">\n    <h1>Led Command</h1>\n    <div>\n      <led-list></led-list>\n    </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [to_service_1.LedService])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map