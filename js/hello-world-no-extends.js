export default class HelloWorldPlugin {

    configure(config) {
        console.log("inside configure")
    }
    

    beforeLaunch(config) {
        try {
            customElements.define('py-hello-world', PyHelloWorld);
            this.elem = document.createElement('py-hello-world');
            document.body.append(this.elem);
        } catch(e) {
            console.error(e)
        }
    }

    afterStartup(runtime) {
        try {
            customElements.define('py-hello-world', PyHelloWorld);
            this.elem = document.createElement('py-hello-world');
            document.body.append(this.elem);
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

