const fs = require("fs");
const path = require("path");//解决引入路径问题
//fs.readFileSync同步方法，fs.readFile异步方法 
const data = fs.readFileSync("./index.js");
console.log(data.toString());//不加toString的话显示的就是2进制文件

const data2 = fs.readFile(path.resolve(__dirname, "index.js"), (err, data) => {
    console.log(data.toString());
})