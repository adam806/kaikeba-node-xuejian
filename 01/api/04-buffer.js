//处理二进制文件
const buf1=Buffer.alloc(10);//分配一个10个字节的空间
console.log(buf1);

//下面的常用
const buf2=Buffer.from("a");
console.log(buf2);//输出结果是61，表示的不是10进制的61，而是ascII码，61就表示“a” 

const buf3=Buffer.from("中国");
console.log(buf3);

//concat把两个buffer结果链接起来
const buf4=Buffer.concat([buf2,buf3]);
//此处需要注意下，使用toString()之所以能显示出来是因为toString()是指的是buffer的方法toStrig(),不是js的那个toString 
console.log(buf4.toString());