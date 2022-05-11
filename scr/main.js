const div = dom.create("<div>newDiv</div>")
console.log(div);
dom.after(test, div)
const nodes = dom.empty(window.empty)
console.log(nodes);


dom.attr(test, "title", "bob")
console.log(test)
const title = dom.attr(test, "title")
console.log(`title:${title}`)

dom.text(test, "你好，这是新的内容！；")
dom.style(test, { border: "1px solid red", color: "black" }) //设置样式 color border
dom.class.add(test, "red")
dom.class.remove(test, "red")
console.log(dom.class.contains(test, "blue"));

const fn = () => {
    console.log("点击了一次")
}
dom.on(test, "click", fn)
dom.off(test, "click", fn)

const testDiv = dom.find("#test")[0] //寻找id test中的第一个元素
dom.find(".red",testDiv) //在testDiv中寻找多个".red"元素
console.log(testDiv)
console.log(dom.parent(test))
console.log(dom.siblings(dom.find("#s2")[0]));

console.log(dom.previous(s2));
console.log(dom.next(s2));


const t = dom.find("#travel")[0]
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"))  //遍历 id travel里的所有元素,并把它们变成红色

console.log(dom.index(s1))


