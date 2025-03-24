/**
 * Browser-Tester are based on Modernizr testing kit
 *
 * Github: https://github.com/jxmked/Browser-Tester/
 */

/**
 * Legacy support
 */

Object.entries =
  Object.entries ||
  ((obj: any): Array<any> => {
    const ownProps = Object.keys(obj);
    let index = ownProps.length;
    const arr = new Array(index);

    while (index--) arr[index] = [ownProps[index], obj[ownProps[index]]];

    return arr;
  });
/****** */

type CreateItemValue_t = string | number | boolean;

const LIST_ITEM = document.getElementById("items") as HTMLDivElement;
const ACRY = document.getElementById("lib") as HTMLParagraphElement;

const counts: { [key: string]: number } = {
  num: 0,
  success: 0,
};

const create_item = (name: string, value: CreateItemValue_t) => {
  const li = document.createElement("li");
  const content = document.createElement("span");

  content.appendChild(document.createTextNode(name));

  li.appendChild(content);

  if (typeof value == "boolean") {
    content.classList.add("item");
    content.classList.add("icons");
    content.classList.add(value ? "icon-checkmark" : "icon-cross");
  } else {
    const childSpan: HTMLElement = document.createElement("span");

    childSpan.style.color = "#30d158";

    childSpan.appendChild(document.createTextNode(String(value)));
    content.appendChild(document.createTextNode(" - "));
    content.appendChild(childSpan);
  }

  if (["true", "probably"].indexOf(String(value).toLowerCase()) != -1) {
    counts["success"]++;
  }

  counts.num++;

  return li;
};

const main = (name: string, items: object, depth: number) => {
  const label: HTMLElement = document.createElement("label");
  const ul: HTMLElement = document.createElement("ul");
  const frag: DocumentFragment = document.createDocumentFragment();

  if (depth == 1) {
    label.classList.add("header-color");
    label.classList.add("header-label");
    label.classList.add("header-bold");
    label.setAttribute("id", "primary-label");
  }

  label.appendChild(document.createTextNode(name));

  Object.entries(items).forEach(([title, attr]) => {
    if (attr instanceof Object) {
      // Reconstruct
      const sub = main(title, attr, depth + 1);
      const li = document.createElement("li");

      li.appendChild(sub);
      ul.appendChild(li);
    } else {
      ul.appendChild(create_item(title, attr));
    }
  });

  frag.appendChild(label);
  frag.appendChild(ul);

  return frag;
};

document.addEventListener("DOMContentLoaded", () => {
  /**
   * Giving time to loadup
   */
  window.Modernizr = window.Modernizr || {};

  const res = window.Modernizr;

  console.log(res)

  window.setTimeout(() => {
    // Clear
    while (LIST_ITEM.firstChild) {
      LIST_ITEM.removeChild(LIST_ITEM.firstChild);
    }

    LIST_ITEM.appendChild(main("Features:", res, 1));

    const lnode = document.createTextNode(
      ` ${counts["success"]}/${counts["num"]}`
    );
    document.getElementById("primary-label")?.appendChild(lnode);
  }, 3000);

  // @ts-ignore
  ACRY.innerText += "@" + Modernizr._version;
});

/**
 * Written by Jovan De Guia
 */
