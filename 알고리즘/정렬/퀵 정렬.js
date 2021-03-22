// 시간 복잡도 O log(2어떻게 쓰지) N
// 아무튼 시간 복잡도가 낮다. 빠르다.
// 정렬된 데이터에 낮은 성능을 보여줄 수 있다.
// 데이터가 적을 경우 성능이 낮아질 수 있다.

// 참고: https://taesung1993.tistory.com/8?category=868017
// 거의 대부분 알고리즘의 이해를 저 블로그에서 했다..!

const quickSort = (arr) => {
  if (arr.length === 0) return [];

  const left = [];
  const right = [];

  // 배열의 첫 원소를 pivot(기준)으로 삼는다.
  const pivot = arr[0];

  // 0번지는 이미 pivot이기 때문에 그 다음의 원소들부터
  // 비교하기 위해 i를 1부터 시작해준다.
  for (let i = 1; i < arr.length; i++) {
    // arr[i]가 pivot보다 작을 경우 왼쪽에 push해준다.
    if (pivot > arr[i]) left.push(arr[i]);
    // 반대는 오른쪽에 push
    else right.push(arr[i]);
  }

  // 재귀호출
  // 이 코드가 이해가 안됨..
  return quickSort(left).concat(pivot, quickSort(right));
};
