import { Controller } from "stimulus"

export default class EnhancedInputController extends Controller {
    static targets = ["input", "copy", "paste"];
    static values = { copy: Boolean, paste: Boolean };
    static classes = ["hidden"];
    
    connect() {
        if (navigator.clipboard) {
            // this.element.classList.add("clipboard--supported");
            // Copying is supported and turned on
            if (navigator.clipboard.writeText && this.copyValue) {
                this.copyTarget.classList.toggle(this.hiddenClass);
            }

            // Pasting is supported
            if (navigator.clipboard.readText && this.pasteValue) {
                this.pasteTarget.classList.toggle(this.hiddenClass);
            }
        }
    }

    async copy() {
        console.log("copying from the input field");
        await navigator.clipboard.writeText(this.inputTarget.value);
        console.log("✅ done. Go try pasting somewhere.");
    }

    async paste() {
        console.log("pasting to the input field");
        const content = await navigator.clipboard.readText();
        this.inputTarget.value = content;
        console.log("✅ done");
    }
}
