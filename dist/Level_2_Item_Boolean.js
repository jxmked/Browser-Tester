define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Level_2_Item_Boolean = (function () {
        function Level_2_Item_Boolean(name) {
            this.main_object = name;
            this.classNames = ["item", "icons"];
        }
        Level_2_Item_Boolean.prototype.createSubList = function () {
            var ul = document.createElement("ul");
        };
        Object.defineProperty(Level_2_Item_Boolean.prototype, "element", {
            get: function () {
                var li = document.createElement("li");
                var span = document.createElement("span");
                li.setAttribute("class", "lvl-2");
                span.appendChild(document.createTextNode(this.name));
                span.setAttribute("class", this.classNames.join(" "));
                li.appendChild(span);
                return li;
            },
            enumerable: false,
            configurable: true
        });
        Level_2_Item_Boolean.if_true = "icon-checkmark";
        Level_2_Item_Boolean.if_false = "icon-cross";
        return Level_2_Item_Boolean;
    }());
    exports.default = Level_2_Item_Boolean;
});
//# sourceMappingURL=Level_2_Item_Boolean.js.map