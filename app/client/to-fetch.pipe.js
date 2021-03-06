System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FetchJsonPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FetchJsonPipe = (function () {
                function FetchJsonPipe() {
                }
                FetchJsonPipe.prototype.transform = function (value, args) {
                    var _this = this;
                    if (!this.fetchPromise) {
                        this.fetchPromise = window.fetch(value)
                            .then(function (result) { return result.json(); })
                            .then(function (json) { return _this.fetchedValue = json; });
                    }
                    return this.fetchedValue;
                };
                FetchJsonPipe = __decorate([
                    core_1.Pipe({
                        name: 'fetch',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], FetchJsonPipe);
                return FetchJsonPipe;
            })();
            exports_1("FetchJsonPipe", FetchJsonPipe);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=to-fetch.pipe.js.map