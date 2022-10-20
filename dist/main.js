"use strict";
var LIST_ITEM = document.getElementById("items");
var TEXT_LABEL = document.getElementById("test-label-status");
var ACRY = document.getElementById("lib");
var BOOLEAN_RESULT = {
    "true": "icon-checkmark",
    "false": "icon-cross"
};
var create_item = function (name, value) {
    var li = document.createElement("li");
    var content = document.createElement("span");
    content.appendChild(document.createTextNode(name));
    li.appendChild(content);
    if (typeof value == "boolean") {
        content.classList.add("item");
        content.classList.add("icons");
        content.classList.add(BOOLEAN_RESULT[String(value)]);
    }
    else {
        var childSpan = document.createElement("span");
        childSpan.style.color = "#30d158";
        childSpan.appendChild(document.createTextNode(String(value)));
        content.appendChild(document.createTextNode(" - "));
        content.appendChild(childSpan);
    }
    return li;
};
var main = function (name, items, depth) {
    var label = document.createElement("label");
    var ul = document.createElement("ul");
    var frag = document.createDocumentFragment();
    if (depth == 1) {
        label.classList.add("header-color");
        label.classList.add("header-label");
        label.classList.add("header-bold");
    }
    label.appendChild(document.createTextNode(String(name)));
    Object.entries(items).forEach(function (_a) {
        var title = _a[0], attr = _a[1];
        if (attr instanceof Object) {
            var sub = main(title, attr, depth + 1);
            var li = document.createElement("li");
            li.appendChild(sub);
            ul.appendChild(li);
        }
        else {
            ul.append(create_item(title, attr));
        }
    });
    frag.append(label);
    frag.append(ul);
    return frag;
};
document.addEventListener("DOMContentLoaded", function () {
    var res = Modernizr;
    window.setTimeout(function () {
        while (LIST_ITEM.firstChild) {
            LIST_ITEM.removeChild(LIST_ITEM.firstChild);
        }
        LIST_ITEM.appendChild(main("Tested Items", res, 1));
    }, 3000);
    ACRY.innerText += "@" + Modernizr._version;
});
//# sourceMappingURL=main.js.map