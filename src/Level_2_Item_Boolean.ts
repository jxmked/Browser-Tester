
/** Level 2 For Boolean
 * 
 *  <li>
 *      <span class="item icons icon-checkmark">name</span>
 *  </li>
**/

export default class Level_2_Item_Boolean {
    
    private name:string;
    private classNames:string[];
    private static if_true:string = "icon-checkmark";
    private static if_false:string = "icon-cross";
    private main_object:{[key:string]:string|boolean};
    
    constructor(name) {
        this.main_object = name;
        this.classNames = ["item", "icons"];
    }
    
    private createSubList() {
        const ul:HTMLULElement = document.createElement("ul");
        
    }
    
    get element():HTMLLIElement {
        const li:HTMLLIElement = document.createElement("li");
        const span:HTMLSpanElement = document.createElement("span");
        
        li.setAttribute("class", "lvl-2");
        
        span.appendChild(document.createTextNode(this.name));
        span.setAttribute("class", this.classNames.join(" "));
        
        li.appendChild(span);
        
        return li;
    }
}
