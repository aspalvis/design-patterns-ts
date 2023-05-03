"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Editor_1 = require("./Editor");
class App {
    main() {
        const editor = new Editor_1.Editor();
        editor.start();
    }
}
exports.App = App;
