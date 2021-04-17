var minOperations = function (logs) {
  let cnt = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i] === "./") continue;
    else if (logs[i] === "../") cnt--;
    else cnt++;

    if (cnt < 0) cnt = 0;
  }
  return cnt;
};

logs = ["d1/", "d2/", "./", "d3/", "../", "d31/"];
minOperations(logs);
