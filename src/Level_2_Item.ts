
/** Level 2 For Boolean and String
 * 
 *  <li class="lvl-2">
 *      <label>Outdo</label>
 *      <ul>
 *          <li>
 *              <span class="item icons icon-cross">String</span>
 *          </li>
 *          <li>
 *              <span class="item icons icon-cross">Boolean</span>
 *          </li>
 *      </ul>
 *  </li>
**/

export default class Level_2_Item {
    
    private name:string;
    private classNames:string[];
    private static if_true:string = "icon-checkmark";
    private static if_false:string = "icon-cross";
    private value:{[key:string]:boolean|string};
    
    constructor(name:string, value:{[key:string]:boolean|string}) {
        this.classNames = ["item", "icons"];
        this.value = value;
        this.name = name;
    }
    
    get element():HTMLLIElement {
        const li:HTMLLIElement = document.createElement("li");
        
        // Add Label
        li.appendChild(this.createLabel());
        
        // Add Unordered List
        li.appendChild(this.createSubList());
        
        return li;
    }
    
    private createLabel():HTMLElement {
        const lb:HTMLElement = document.createElement("label");
        
        lb.appendChild(document.createTextNode(this.name));
        
        //lb.setAttribute("class", "")
        return lb;
    }
    
    private createSubList():HTMLElement {
        const ul:HTMLElement = document.createElement("ul");
        
        Object.entries(this.value).forEach((value) => {
            ul.appendChild(this.createListSpan(...value));
        });
        
        return ul;
    }
    
    
    private createListSpan(name:string, value:boolean|string):HTMLLIElement {
        const li:HTMLLIElement = document.createElement("li");
        const sp:HTMLSpanElement = document.createElement("span");
        const classNames:string[] = [...this.classNames];
        
        sp.appendChild(document.createTextNode(name));
        
        if(this.is_boolean(value)) {
            classNames.push(name == String(name) ? Level_2_Item.if_true : Level_2_Item.if_false);
            sp.setAttribute("class", classNames.join(" "));
        } else {
            const lp:HTMLSpanElement = document.createElement("span");
            lp.appendChild(document.createTextNode(value));
            
            sp.appendChild(document.createTextNode(` - `));
            sp.appendChild(lp);
            
            lp.setAttribute("style", "color: rgb(48, 209, 88);")
        }
        
        li.setAttribute("class", "lvl-1");
        li.appendChild(sp);
        
        return li;
    }
    
    private is_boolean(val:any):boolean {
        const param = String(val);
        // ===
        return (param == "true" || param == "false");
    }
}
