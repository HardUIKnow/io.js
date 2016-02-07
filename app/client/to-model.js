System.register([], function(exports_1) {
    var LedModel;
    return {
        setters:[],
        execute: function() {
            LedModel = (function () {
                function LedModel(name, pin, status, color) {
                    if (name === void 0) { name = ""; }
                    if (pin === void 0) { pin = ""; }
                    if (status === void 0) { status = ""; }
                    if (color === void 0) { color = ""; }
                    this.name = name;
                    this.pin = pin;
                    this.status = status;
                    this.color = color;
                }
                LedModel.prototype.on = function () {
                    this.status = "On";
                    this.color = "green";
                };
                LedModel.prototype.off = function () {
                    this.status = "Off";
                    this.color = "red";
                };
                return LedModel;
            })();
            exports_1("LedModel", LedModel);
        }
    }
});
//# sourceMappingURL=to-model.js.map