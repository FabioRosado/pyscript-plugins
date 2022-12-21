export default class HelloWorldPlugin {
    
    configure(config) {		
       	// Not used
    }		

    beforeLaunch(config) {		
        // Not used	
    }		

    afterSetup(runtime) {		
        //not used		
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
        console.error({error})
    }
}

class PyHelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hello, world!</h1>`;
        this.mount_name = this.id;
    }

}