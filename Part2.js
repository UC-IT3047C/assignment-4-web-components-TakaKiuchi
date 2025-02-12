class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
                }
            </style>
            <div style="${this.getAttribute('style')}">
                <h1><slot name="header"></slot></h1>
                <p><slot name="body"></slot></p>
                <p>${this.getAttribute('text')}</p>
            </div>
        `;
    }
}

customElements.define('my-component', MyComponent);
