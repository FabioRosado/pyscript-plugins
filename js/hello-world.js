
class HelloWorldPlugin extends Plugin {

    configure(config) {

    }
    

    beforeLaunch(config) {
        customElements.define('py-hello-world', PyHelloWorld);
        this.elem = document.createElement('py-hello-world');
        document.body.append(this.elem);
    }

    afterStartup(runtime) {
        // if (this.autoclose) {
        //     this.elem.close();
        // }
        customElements.define('py-hello-world', PyHelloWorld);
        this.elem = document.createElement('py-hello-world');
        document.body.append(this.elem);
    }

    onUserError(error) {
        // if (this.elem !== undefined) {
        //     // Remove the splashscreen so users can see the banner better
        //     this.elem.remove();
        // }
    }
}

class PyHelloWorld extends HTMLElement {
    id = 'test';
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello, world!</h1>`;
    }

}
