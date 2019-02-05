//把<a>标签中的href 赋值到 <img>的src上。
function showPic(whichpic) {
    var source = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src",source);
    var description = document.getElementById("description");
    var text = whichpic.getAttribute("title");
    description.firstChild.nodeValue = text;
}
//把body中的元素的个数打印到屏幕上
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes.length);
}
//在onload（页面加载时）执行函数countBodyChildren。
window.onload = countBodyChildren;

//把<p>标签中的文字替换成<a>中的title。