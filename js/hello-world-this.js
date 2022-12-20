export default class HelloWorldPlugin {

    constructor() {
        console.log("inside constructor")
    }

    configure(config) {
        console.log("inside configure")
    }

    afterStartup(runtime) {
        console.error(runtime)
        try {
            customElements.define('py-hello-world', PyHelloWorld);
            const elem = document.createElement('py-hello-world');
            document.body.append(elem);
        } catch(e) {
            console.error(e)
        }
    }

    onUserError(error) {
        console.error({error})
        // if (this.elem !== undefined) {
        //     // Remove the splashscreen so users can see the banner better
        //     this.elem.remove();
        // }
    }
}

class PyHelloWorld extends HTMLElement {
    id = 'test';
    mount_name;
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello, world!</h1>`;
        this.mount_name = this.id;
    }

}