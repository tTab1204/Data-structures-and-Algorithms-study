// 방법1
var kWeakestRows = function (mat, k) {
  const hmap = {}, //
    results = [];

  for (let i = 0; i < mat.length; i++) {
    hmap[i] = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) hmap[i]++;
    }
    results.push(i);
  }
  //   console.log("results: ", results);
  //   console.log("hmap: ", hmap);

  const result = [...results].sort((a, b) => hmap[a] - hmap[b]);
  return result.slice(0, k);
};
