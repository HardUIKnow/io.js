System.register(["angular2/core", "angular2/http", "./to-service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, to_service_1;
    var LedList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (to_service_1_1) {
                to_service_1 = to_service_1_1;
            }],
        execute: function() {
            // import {LedModel} from "./to-model";
            LedList = (function () {
                function LedList(ledService) {
                    this.ledService = ledService;
                    console.log(this.ledService.leds);
                }
                LedList.prototype.onClick = function (value) {
                    value.status = "on";
                    console.log(value.status);
                };
                LedList.prototype.offClick = function (value) {
                    value.status = "off";
                    console.log(value.status);
                    //console.log(this.buttonOffModel);
                };
                LedList = __decorate([
                    core_1.Component({
                        selector: 'led-list',
                        providers: [http_1.HTTP_PROVIDERS],
                        // directives:[LedService],
                        template: "\n  <table>\n    <thead>\n      <th>Component</th>\n      <th>Status</th>\n      <th>Action</th>\n    </thead>\n    <tbody *ngFor=\"#led of ledService.leds\">\n    <tr>\n    <td>{{led.name}}</td>\n    <td>{{led.status}}</td>\n    <td>{{index}}<button (click)=\"onClick(led)\" >on</button>\n    {{index}}<button (click)=\"offClick(led)\" >off</button></td>\n    </tr>\n    </tbody>\n  </table>",
                        styles: ["\n    h1 {\n      color: #f39c12\n    }\n    div {\n      padding: 10px;\n      color: #bdc3c7;\n    }\n    table, th, td {\n      border-bottom : 2px solid grey;\n      border-collapse: collapse;\n      padding: 10px;\n      text-align: center;\n      color: #bdc3c7;\n    }\n    tr:hover {\n      background-color: #7f8c8d;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [to_service_1.LedService])
                ], LedList);
                return LedList;
            })();
            exports_1("LedList", LedList);
        }
    }
});
//# sourceMappingURL=to-list.js.map