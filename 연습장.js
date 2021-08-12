Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 9000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log(promise));

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});

promise
  .then(function (first) {
    console.log('first', first);
    return 2;
  })
  .then(function (second) {
    console.log('second', second);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(3);
      }, 1000);
    });
  })
  .then(function (third) {
    console.log('third', third);
  });
