import { Application } from "stimulus"
import EnhancedInputController from "./enhanced-input-controller";

const application = Application.start();
application.register("enhanced-input", EnhancedInputController);
console.log("Stimulus application started");