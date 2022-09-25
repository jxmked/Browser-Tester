
/** For Boolean
 * 
 *  <li>
 *      <span class="item icons icon-checkmark">name</span>
 *  </li>
**/

export default class Level_1_Item_Boolean {
    
    private name:string;
    private value:boolean;
    private classNames:string[];
    private static if_true:string = "icon-checkmark";
    private static if_false:string = "icon-cross";
    
    constructor(name:string, value:boolean) {
        this.name = name;
        this.value = value;
        
        this.classNames = ["item", "icons"];
        
        if(this.value) {
            this.classNames.push(Level_1_Item_Boolean.if_true);
        } else {
            this.classNames.push(Level_1_Item_Boolean.if_false);
        }
    }
    
    get element():HTMLLIElement {
        const li:HTMLLIElement = document.createElement("li");
        const span:HTMLSpanElement = document.createElement("span");
        
        li.setAttribute("class", "lvl-1");
        
        span.appendChild(document.createTextNode(this.name));
        span.setAttribute("class", this.classNames.join(" "));
        
        li.appendChild(span);
        
        return li;
    }
}
