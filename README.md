# DOM Utils

## JSON DOM Builder

This function convert a JSON-structured data into DOM.

The function receives an object in following structure:
```Javascript
{
    type: "p",    // type of the DOM element you want to create
    props: {     // the attributs you want to set for the element
        className: "text-big",
        innerHTML: "Hello World"    // you can create the child nodes by using innerHTML or "children" property below 
    },
    children: [
        {
            type: "h4",
            props: {
                className: "title",
                innerHTML: "Title Text"
            }
        }  
    ],
    events: {    // This is a list of the events to listen.
        click: e => { console.log("clicked") }    
    }
}
```

Example:

```javascript
const card = buildDom({
        type: "div",
        props: {
            className: "card-body"
        },
        children: [
            {
                type: "p",
                props: {
                    className: "card-text btn btn-outline-dark btn-sm ",
                    innerHTML: "Card text"
                }
            },{
                type: "h4",
                props: {
                    className: "card-title",
                    innerHTML: "Title"
                }
            },{
                type: "p",
                props: {
                    className: "card-text text-sm card-location",
                    innerHTML: "some text..."
                }
            }
        ]
    });
```
