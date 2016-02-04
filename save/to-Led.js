System.register(["angular2/core", 'angular2/http'], function(exports_1) {
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
    var ToLed;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ToLed = (function () {
                function ToLed(http) {
                    var _this = this;
                    this.http = http;
                    this.active = false;
                    this.http.get('http://localhost:8080/api/bears').subscribe(function (res) {
                        _this.boards = res.json();
                    });
                }
                ToLed.prototype.toggleActiveState = function () {
                    this.active = !this.active;
                };
                // getLed(){
                //   this.http.get('http://localhost:8080/api/bears').subscribe(res => {
                //     this.boards = res.json();
                //   });
                // }
                ToLed.prototype.clickOn = function (value) {
                    // var tochange;
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=on&color=green";
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.put('http://localhost:8080/api/bears/' + value._id, modChange, {
                        headers: header
                    })
                        .subscribe(function (res) { return console.log(res.json()); });
                    // for(var num in this.boards){
                    //   tochange = this.boards[num];
                    //   if(tochange.name == value){
                    //     tochange.status = "On";
                    //     tochange.color = "green";
                    //   }
                    // }
                    console.log(this.boards);
                };
                ToLed.prototype.clickOff = function (value) {
                    var modChange = "name=" + value.name + "&pin=" + value.pin + "&status=off&color=red";
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.put('http://localhost:8080/api/bears/' + value._id, modChange, {
                        headers: header
                    })
                        .subscribe(function (res) { return console.log(res.json()); });
                    // var tochange;
                    // for(var num in this.boards){
                    //   tochange = this.boards[num];
                    //   if(tochange.name == value){
                    //     tochange.status = "Off";
                    //     tochange.color = "red";
                    //   }
                    // }
                    console.log(this.boards);
                };
                ToLed = __decorate([
                    core_1.Component({
                        selector: 'my-led',
                        providers: [http_1.HTTP_PROVIDERS],
                        template: "<h1>Led Command</h1>\n\n  <div>\n  <table>\n    <thead>\n      <th>Component</th>\n      <th>Status</th>\n      <th>Action</th>\n    </thead>\n    <tbody *ngFor=\"#opt of boards\">\n    <tr>\n    <td>{{opt.name}}</td>\n    <td>{{opt.status}}</td>\n    <td>\n    <button (click)=\"clickOn(opt)\">On</button>\n    <button (click)=\"clickOff(opt)\">Off</button>\n    </td>\n    </tr>\n    <tbody>\n  </table></div>",
                        styles: ["\n    h1 {\n      color: #f39c12\n    }\n    div {\n      padding: 10px;\n      color: #bdc3c7;\n    }\n    table, th, td {\n      border-bottom : 2px solid grey;\n      border-collapse: collapse;\n      padding: 10px;\n      text-align: center;\n      color: #bdc3c7;\n    }\n    tr:hover {\n      background-color: #7f8c8d;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ToLed);
                return ToLed;
            })();
            exports_1("ToLed", ToLed);
        }
    }
});
//# sourceMappingURL=to-Led.js.map