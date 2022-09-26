import Level_1_Item_Boolean from "./Level_1_Item_Boolean";
import Level_2_Item from "./Level_2_Item";

type Level_1_Type = [string, boolean|{[key:string]:boolean|string}];

class Main {
    private dom_ul:HTMLElement;
    private test_label_status:HTMLElement;
    
    constructor(mdnzr:ModernizrStatic){
        this.dom_ul = document.getElementById("items")!;
        this.test_label_status = document.getElementById("test-label-status")!;
        
        const fragments:DocumentFragment = document.createDocumentFragment();
        
        Object.entries(mdnzr).forEach((entries:Level_1_Type) => {
            const [name, value] = entries;
            
            if(value instanceof Object) {
                // Object
                fragments.appendChild(new Level_2_Item(name, value).element);
            } else {
                // Boolean
                fragments.appendChild(new Level_1_Item_Boolean(name, value).element);
            }  
        });
        
        this.dom_ul.appendChild(fragments);
        
        this.test_label_status.innerText = "Test Result";
    }
}


(async () => {
    new Main(Modernizr);
})();

