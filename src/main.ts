/**
 * Browser-Tester are based on Modernizr testing kit
 * 
 * Github: https://github.com/jxmked/Browser-Tester/
 */


const LIST_ITEM:HTMLElement = document.getElementById("items")!;
const TEXT_LABEL:HTMLElement = document.getElementById("test-label-status")!;
const ACRY:HTMLElement = document.getElementById("lib")!;

/**
 * Css Icons for status result
 * */
const BOOLEAN_RESULT:{[key:string]:string} = {
    "true": "icon-checkmark",
    "false": "icon-cross"
};

const counts:{[key:string]:number} = {
    "num": 0,
    "success": 0
};

const create_item:Function = (name:string, value:number|string|boolean):HTMLElement => {
    const li:HTMLElement = document.createElement("li");
    const content:HTMLElement = document.createElement("span");
    
    content.appendChild(document.createTextNode(name));
    
    li.appendChild(content);

    if(typeof value == "boolean") {
        
        content.classList.add("item");
        content.classList.add("icons");
        content.classList.add(BOOLEAN_RESULT[String(value)]);
        
    } else {
    
        const childSpan:HTMLElement = document.createElement("span");

        childSpan.style.color = "#30d158";

        childSpan.appendChild(document.createTextNode(String(value)));
        content.appendChild(document.createTextNode(" - "));
        content.appendChild(childSpan);
    }

    if(["true", "probably"].indexOf(String(value).toLowerCase()) != -1){
        counts["success"]++;
    }

    counts["num"]++;

    return li;
}

const main:Function = (name:string, items:object, depth:number):DocumentFragment => {
    const label:HTMLElement = document.createElement("label");
    const ul:HTMLElement = document.createElement("ul");
    const frag:DocumentFragment = document.createDocumentFragment();

    if(depth == 1) {
        label.classList.add("header-color");
        label.classList.add("header-label");
        label.classList.add("header-bold");
        label.setAttribute("id", "primary-label");
    }

    label.appendChild(document.createTextNode(String(name)));
    
    Object.entries(items).forEach(([title, attr]) => {
        if(attr instanceof Object) {
            // Reconstruct 
            const sub = main(title, attr, depth + 1);
            const li = document.createElement("li");

            li.appendChild(sub);
            ul.appendChild(li);
        
        } else {
            ul.append(create_item(title, attr));
        }
    });
    
    frag.append(label);
    frag.append(ul);

    return frag;
}

document.addEventListener("DOMContentLoaded", () => {
    /**
     * Giving time to loadup
     */
    window.Modernizr = window.Modernizr || {};
     
    const res = window.Modernizr; 
    
    window.setTimeout(() => {
        
        // Clear
        while(LIST_ITEM.firstChild) {
            LIST_ITEM.removeChild(LIST_ITEM.firstChild)
        }

        LIST_ITEM.appendChild(main("Features:", res, 1));
        
        const lnode = document.createTextNode(` ${counts["success"]}/${counts["num"]}`);
        document.getElementById("primary-label")?.appendChild(lnode);
    }, 3000);
        
    // @ts-ignore
    ACRY.innerText += "@" + Modernizr._version;
});

/**
 * Written by Jovan De Guia
 */

