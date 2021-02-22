import { controller, target, attr } from "@github/catalyst"

@controller
export class EnhancedInputElement extends HTMLElement {
    @target copyButton: HTMLButtonElement;
    @target pasteButton: HTMLButtonElement;
    @target input: HTMLInputElement;
    @attr copyEnabled = false;
    @attr pasteEnabled = false;

    connectedCallback() {
        console.log('EnhancedInputElement connected');
        if (navigator.clipboard) {
            // Copying is supported and turned on
            if (navigator.clipboard.writeText && this.copyEnabled === true) {
                this.copyButton.classList.toggle('hidden');
            }

            // Pasting is supported
            if (navigator.clipboard.readText && this.pasteEnabled === true) {
                this.pasteButton.classList.toggle('hidden');
            }
        }
    }

    async copy(): Promise<void> {
        console.log("copying from the input field");
        await navigator.clipboard.writeText(this.input.value);
        console.log("✅ done. Go try pasting somewhere.");
    }

    async paste(): Promise<void> {
        console.log("pasting to the input field");
        const content = await navigator.clipboard.readText();
        this.input.value = content;
        console.log("✅ done");
    }
}