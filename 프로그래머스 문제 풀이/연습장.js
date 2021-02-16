const solution = (newId) => {
  // 1. 대문자 -> 소문자 치환
  let arr = newId
    .toLowerCase()
    .split("")
    // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를
    // 제외한 모든 문자를 제거
    .filter(
      (item) =>
        item === "-" ||
        item === "_" ||
        item === "." ||
        (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122) ||
        // 숫자면 false를 준다.
        isNaN(Number(item)) === false
    );

  // 3. new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "." && arr[i + 1] === ".") {
      continue;
    } else {
      arr2.push(arr[i]);
    }
  }

  // 4. new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  if (arr2[0] === ".") {
    arr2.shift();
  }

  if (arr2[arr2.length - 1] === ".") {
    arr2.pop();
  }

  // 5. new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  if (arr2.length === 0) {
    arr2.push("a");
  }

  // 6. new_id의 길이가 16자 이상이면,
  // new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  if (arr2.length >= 16) {
    arr2 = arr2.slice(0, 15);
  }

  // 6-2.만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  if (arr2[arr2.length - 1] === ".") {
    arr2.pop();
  }

  // 7. new_id의 길이가 2자 이하라면,
  // new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

  if (arr2.length <= 2) {
    while (arr2.length !== 3) {
      arr2.push(arr2[arr2.length - 1]);
    }
  }
  return arr2.join("");
};
