class MyComponent extends HTMLElement {
    constructor() {
        super();
        // Access the template
        const template = document.getElementById('my-component-template');
        const templateContent = template.content;
        
        // Attach shadow DOM and clone the template content
        this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));

        // Get the text and style attributes and apply them
        const text = this.getAttribute('text');
        const style = this.getAttribute('style');
        
        // Set the body content and apply the style dynamically
        this.shadowRoot.querySelector('.body').textContent = text;
        this.style.cssText = style;
    }
}

// Define the custom element
customElements.define('my-component', MyComponent);
