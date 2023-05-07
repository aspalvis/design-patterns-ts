"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrowserHistoty_1 = require("./Classes/BrowserHistoty");
const bh = new BrowserHistoty_1.BrowserHistory();
const iterator = bh.createIterator();
bh.push("1");
bh.push("2");
bh.push("3");
while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}
//# sourceMappingURL=index.js.map