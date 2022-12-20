
export default class HelloWorldPlugin extends Plugin {

    constructor() {
        super();
        console.log("inside constructor")
    }

    configure(config) {
        console.error("########## inside configure")
    }

    beforeLaunch(config) {
        console.error("########## inside beforeLaunch")
    }

    afterSetup(runtime) {
        console.error("########## inside afterSetup")
    }

    afterStartup(runtime) {
        console.error("########## inside afterStartup")
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
        console.error("########## inside onUserError")
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