var webshot = require("webshot");
var options = {
  screenSize: {
    width: 375,
    height: 480
  },
  shotSize: {
    width: 375,
    height: "all"
  },
  quality: 10,
  // timeout: 3000,
  userAgent:
    "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)" +
    " AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g"
};

// 原始数组数据
let array = [],
  arrLen = 1000;
for (var i = 1; i < arrLen; i++) {
  array[array.length] = i;
}

// 分段长度
const SIZE = 15;

// 段数
const LEN = arrLen / SIZE;

// 中点组1
let middles = [],
  point = 1;

while (point <= LEN) {
  middles.push(point * SIZE);
  point++;
}

// 中点循环计数标识
let START = 0;

const haha = (i, s) => {
  webshot(
    "http://static.hanjiasongshu.com/jaha/",
    `${i}.png`,
    options,
    function(err) {
      if (middles[s] == i) {
        console.timeEnd(middles[s] == SIZE ? 0 : middles[s - 1]);
        START++;
        cc(START);
      }
      if (middles[s] == arrLen) {
        console.timeEnd(`${arrLen} Time-consuming`);
      }
    }
  );
};

const cc = s => {
  for (
    let index = middles[s] == SIZE ? 0 : middles[s - 1];
    index <= middles[s];
    index++
  ) {
    if (index == (middles[s] == SIZE ? 0 : middles[s - 1])) {
      console.time(`${arrLen} Time-consuming`);
      console.time(middles[s] == SIZE ? 0 : middles[s - 1]);
    }
    haha(index, s);
  }
};

cc(START);
