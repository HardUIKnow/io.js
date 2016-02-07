System.register(["angular2/core", "./to-service", "./to-http", "./to-fetch.pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, to_service_1, to_http_1, to_fetch_pipe_1;
    var LedList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (to_service_1_1) {
                to_service_1 = to_service_1_1;
            },
            function (to_http_1_1) {
                to_http_1 = to_http_1_1;
            },
            function (to_fetch_pipe_1_1) {
                to_fetch_pipe_1 = to_fetch_pipe_1_1;
            }],
        execute: function() {
            LedList = (function () {
                function LedList(ledService, http) {
                    var _this = this;
                    this.ledService = ledService;
                    this.http = http;
                    this.http.getBears()
                        .subscribe(function (res) { return _this.ledService.leds = res; }, function (error) { return alert(error); }, function () { return console.log('Bears processed'); });
                }
                LedList.prototype.onClick = function (value) {
                    value.status = "on";
                    value.color = "green";
                    console.log(value.name, value.status);
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
                    this.http.putBears(modChange, value._id);
                };
                LedList.prototype.offClick = function (value) {
                    value.status = "off";
                    value.color = "red";
                    console.log(value.name, value.status);
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=" + value.status + "&color=" + value.color;
                    this.http.putBears(modChange, value._id);
                };
                LedList = __decorate([
                    core_1.Component({
                        selector: 'led-list',
                        providers: [to_http_1.HttpService],
                        template: "\n    <table>\n        <thead>\n            <th>Component</th>\n            <th>Status</th>\n            <th>Action</th>\n        </thead>\n        <tbody *ngFor=\"#led of ledService.leds\">\n            <tr>\n                <td>{{led.name}}</td>\n                <td>{{led.status}}</td>\n                <td><button (click)=\"onClick(led)\" >on</button>\n                <button (click)=\"offClick(led)\">off</button></td>\n            </tr>\n        </tbody>\n  </table>",
                        pipes: [to_fetch_pipe_1.FetchJsonPipe]
                    }), 
                    __metadata('design:paramtypes', [to_service_1.LedService, to_http_1.HttpService])
                ], LedList);
                return LedList;
            })();
            exports_1("LedList", LedList);
        }
    }
});
//# sourceMappingURL=to-list.js.map