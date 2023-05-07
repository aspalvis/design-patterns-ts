import { BrowserHistory } from "./Classes/BrowserHistoty";

const bh = new BrowserHistory();
const iterator = bh.createIterator();
bh.push("1");
bh.push("2");
bh.push("3");

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
