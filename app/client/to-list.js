System.register(["angular2/core", "angular2/http", "./to-service", "./to-status"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, to_service_1, to_status_1;
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
            },
            function (to_status_1_1) {
                to_status_1 = to_status_1_1;
            }],
        execute: function() {
            // import {LedButton} from "./to-button";
            LedList = (function () {
                // public ledArray:LedModel[]=[];
                function LedList(ledService, http) {
                    var _this = this;
                    this.ledService = ledService;
                    this.http = http;
                    this.active = false;
                    this.http.get('/api/bears').subscribe(function (res) {
                        _this.ledService.leds = res.json();
                        // this.ledArray = res.json();
                        console.log(_this.ledService.leds);
                    });
                    // console.log(this.data);
                }
                LedList.prototype.toggleActiveState = function () {
                    this.active = !this.active;
                };
                LedList.prototype.onClick = function (value) {
                    value.status = "on";
                    value.color = "green";
                    console.log(value.name, value.status);
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.put('http://localhost:8080/api/bears/' + value._id, modChange, {
                        headers: header
                    })
                        .subscribe(function (res) { return console.log(res.json()); });
                };
                LedList.prototype.offClick = function (value) {
                    value.status = "off";
                    value.color = "red";
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.put('http://localhost:8080/api/bears/' + value._id, modChange, {
                        headers: header
                    })
                        .subscribe(function (res) { return console.log(res.json()); });
                    //console.log(this.buttonOffModel);
                };
                LedList = __decorate([
                    core_1.Component({
                        selector: 'led-list',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [to_status_1.LedStatus],
                        template: "\n  <table>\n    <thead>\n      <th>Component</th>\n      <th>Status</th>\n      <th>Action</th>\n    </thead>\n    <tbody *ngFor=\"#led of ledService.leds\">\n    <tr>\n    <td>{{led.name}}</td>\n    <td><led-status [led]=\"led\"></led-status></td>\n    <td><button (click)=\"onClick(led)\" >on</button>\n    <button (click)=\"offClick(led)\">off</button></td>\n    </tr>\n    </tbody>\n  </table>",
                        styles: ["\n    h1 {\n      color: #f39c12\n    }\n    div {\n      padding: 10px;\n      color: #bdc3c7;\n    }\n    table, th, td {\n      border-bottom : 2px solid grey;\n      border-collapse: collapse;\n      padding: 10px;\n      text-align: center;\n      color: #bdc3c7;\n    }\n    tr:hover {\n      background-color: #7f8c8d;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [to_service_1.LedService, http_1.Http])
                ], LedList);
                return LedList;
            })();
            exports_1("LedList", LedList);
        }
    }
});
//# sourceMappingURL=to-list.js.map