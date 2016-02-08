System.register(["angular2/core", "angular2/http", 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                }
                HttpService.prototype.getBears = function () {
                    return this.http.get('/api/bears')
                        .map(function (res) { return res.json(); });
                    //.subscribe(
                    //    res => this.ledService.leds = res,
                    //    error => alert(error),
                    //    () => console.log('Bears processed')
                    //);
                };
                HttpService.prototype.putBears = function (modChange, bears_id) {
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.put('http://localhost:8080/api/bears/' + bears_id, modChange, {
                        headers: header
                    })
                        .subscribe(function (res) { return console.log(res.json()); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            })();
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=to-http.js.map