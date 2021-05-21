/**
 * 
 * @param {String} selector 
 * @param {Object} node 
 */
var appendNewElement = (selector, node) => {
    document.querySelector(selector).append(newElement(node));
}

/**
 * 
 * @param {Object} node - An object that represent the structure of the DOM.
 * @returns DOM element
 */
 var newElement = (node) => {

    const ele = document.createElement(node.type);

    for ( key in node.props) {
        if (key.substring(0, 5) === "data_") {
            ele.dataset[key.substring(5)] = node.props[key]
        } else {
            ele[key] = node.props[key];
        }
    }

    if (node.events) {
        for ( key in node.events) {
            ele.addEventListener( key, node.events[key]);
        }
    }

    if (node.children) {
  
        node.children.forEach( child => {
            const childEle = newElement(child);
            ele.append(childEle)
        });
    }

    return ele;
}



