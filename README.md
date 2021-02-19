# Custom Element Libraries

This Repository showcases building a Custom Element using [Stimulus](https://stimulus.hotwire.dev/) and [Catalyst](https://github.gihub.io/catalyst) as the base.

It builds on a simple example where we progressively enhance an `<input>` Element to allow it to receive its contents from the Computers clipboard or to share its contents onto the computers clipboard. Declarative HTML Attributes are provided to allow the control over which of the two functions should be enabled at all (by default both are _on_).

The implementation uses the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) that is not yet equally supported through all browsers, so the results you see may vary based on your User Agent.

Depending on the Browser a permission dialog _should_ come up, when you try to paste, since that is an operation the User should be aware of.

## Trying it out

To see the example live, go to either the `stimulus.` or the `catalyst/` subdirectory and run

1. `npm install` – to get all (few) dependencies
2. `npm run start` – to run the example locally (this should open a browser automatically but if it doesn't go to [http://localhost:3000/](http://localhost:3000/))
3. `npm run build` – runs a Build on the whole setup so you can get a serialized and distributable example that runs natively in any modern browser.

[Snowpack](https://www.snowpack.dev/) is used for the serving and the bundling, if you wonder about any of those I'd recommend their documentation.