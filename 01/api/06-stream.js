const fs = require("fs");
const rs2 = fs.createReadStream("./voice.png");
const ws2 = fs.createWriteStream("./voice.png");
rs2.pipe(ws2);