var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./Level_1_Item_Boolean"], function (require, exports, Level_1_Item_Boolean_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Level_1_Item_Boolean_1 = __importDefault(Level_1_Item_Boolean_1);
    var Main = (function () {
        function Main(mdnzr) {
            var _this = this;
            this.items = [];
            Object.entries(mdnzr).forEach(function (entries) {
                var name = entries[0], value = entries[1];
                if (value instanceof Object) {
                    Object.entries(value).forEach(function (entries_2) {
                        var name = entries_2[0], value = entries_2[1];
                        if (typeof value == "boolean") {
                        }
                        else {
                        }
                    });
                }
                else {
                    _this.items.push(new Level_1_Item_Boolean_1.default(name, value).element);
                }
            });
        }
        return Main;
    }());
    var obj = new Main(Modernizr);
});
//# sourceMappingURL=main.js.map