from pyscript import Plugin, js

plugin = Plugin("PyHelloWorld")

@plugin.register_custom_element("py-hello-world")
class PyHelloWorld:
    def __init__(self, element):
        self.element = element
    
    def _create_element(self):
        el = js.document.createElement("div")
        el.innerHTML = "Hello World!"
        return el
    
    def connect(self):
        self._create_element()