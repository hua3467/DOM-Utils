# DOM Utils

## JSON DOM Builder

This function convert a JSON-structured data into DOM.

The function receives an object in following structure:

```Javascript
{
    type: "p",    // type of the DOM element you want to create
    props: {      // the attributs you want to set for the element
        className: "text-big",
        innerHTML: "Hello World"    // you can create the child nodes by using innerHTML
    },
    children: [                     // you can also create the child nodes by adding node objects, this support event lisener for the children.
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
const card = newElement({
        type: "div",
        props: {
            className: "card-body"
        },
        children: [
            {
                type: "h4",
                props: {
                    className: "card-title",
                    innerHTML: "Title"
                }
            },{
                type: "p",
                props: {
                    className: "card-text",
                    innerHTML: "some text..."
                },
                events: {
                    click: e => { console.log("clicked"); }
                }
            }
        ]
    });
```

Following HTML document will be created:

```html
    <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">some text...</p>
    </div>
```

Then, the the event listener will be added to `<p class="card-text">some text...</p>` element:

```javascript
node.addeventListener("click", e => { console.log("clicked"); } )
```
