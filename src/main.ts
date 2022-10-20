
function define(){
    
}

const LIST_ITEM:HTMLElement = document.getElementById("items")!;
const TEXT_LABEL:HTMLElement = document.getElementById("test-label-status")!;
const FRAGMENTS:DocumentFragment = document.createDocumentFragment();
const ACRY:HTMLElement = document.getElementById("lib")!;

/**
 * Css Icons for status result
 * */
const BOOLEAN_RESULT:{[key:string]:string} = {
    "true": "icon-checkmark",
    "false": "icon-cross"
};


const create_item:Function = (name:string, value:number|string|boolean):HTMLElement => {
    const li:HTMLElement = document.createElement("li");
    const content:HTMLElement = document.createElement("span");
    
    li.classList.add("lvl-1")
    
    content.appendChild(document.createTextNode(name))
    li.appendChild(content);
    
    // Is boolean?
    if(typeof value == "boolean") {
        content.classList.add("item");
        content.classList.add("icons");
        content.classList.add(BOOLEAN_RESULT[String(value)]);
    } else {
        const childSpan:HTMLElement = document.createElement("span");
        childSpan.appendChild(document.createTextNode(String(value)));
        
        childSpan.style.color = "#30d158";
        
        content.appendChild(document.createTextNode("-"));
        content.appendChild(childSpan);
    }
    
    return li;
}


const main:Function = async (name:string, items:object, depth:number):Promise<void> => {
    // Create Label
    //const label:HTMLElement = document.createElement("label");
    Object.entries(items).forEach(([title, attr]) => {
        if(typeof attr == "boolean") {
            const item = create_item(title, attr);
            
            LIST_ITEM.appendChild(item);
        }
    });
}









document.addEventListener("DOMContentLoaded", async () => {
    const res = await Modernizr;
   // console.log(res)
    main("Tested Items", res, 1);
    
    Modernizr.on("cors", (res) => {
        console.log(res)
    })
    ACRY.innerText += "@" + Modernizr._version;
});
