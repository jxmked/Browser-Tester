import Level_1_Item_Boolean from "./Level_1_Item_Boolean";

type Level_1_Type = [string, boolean|{[key:string]:boolean|string}];
type Level_2_Type = [string, boolean|string];
type Level_3_Type = [string, boolean|string|Level_2_Type];

// Level 1 Item . Element
type L1IType = HTMLLIElement;

class Main {
    items:L1IType[];
    
    constructor(mdnzr:ModernizrStatic){
        this.items = [];
        
        Object.entries(mdnzr).forEach((entries:Level_1_Type) => {
            const [name, value] = entries;
            
            if(value instanceof Object) {
                // Object
                Object.entries(value).forEach((entries_2) => {
                    const [name, value] = entries_2;
                    
                    // 'instanceof' getting error
                    if(typeof value == "boolean") {
                        // Boolean
                        
                    } else {
                        // String
                        
                    }
                });
            } else {
                // Boolean
                this.items.push(new Level_1_Item_Boolean(name, value).element);
            }  
        });
    }
}


const obj = new Main(Modernizr);
