//下面是内置对象，不用再npm
const os = require("os");
const mem = os.freemem() / os.totalmem * 100;
console.log(`当前内存占用率${mem.toFixed(2)}%`);

//下方是查看cpu的第三方包，需要先npm install:npm i cpu-stat -s
//util可以把下面麻烦的回调函数改成promise方法，先引入util
const util = require("util");
const cpuStat = require("cpu-stat");
// cpuStat.usagePercent((err, percent) => {
//     const timer=setInterval(() => {
//         console.log(`cpu占用率：${percent.toFixed(2)}%`);
//         clearInterval(timer);
//     }, 1000);
// })

//用util重写上面方法
const getCpu = util.promisify(cpuStat.usagePercent);
getCpu().then((percent) => {
    console.log(`cpu占用率：${percent.toFixed(2)}%`)
})


//把上面包装成一个方法，然后导出给其他文件用
//用了async await的写法
const showStat = async () => {
    const mem = os.freemem() / os.totalmem * 100;
    console.log(`当前内存占用率${mem.toFixed(2)}%`);
    const percent=await getCpu();
    console.log(`cpu占用率：${percent.toFixed(2)}%`)
}
//输出成一个模块
module.exports={
    showStat
}