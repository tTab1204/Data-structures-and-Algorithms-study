var countVowelStrings = function (n) {
  return (
    5 +
    10 * combination(n - 1, 1) +
    10 * combination(n - 1, 2) +
    5 * combination(n - 1, 3) +
    combination(n - 1, 4)
  );
};

function combination(n, k) {
  if (k === 1) return n;

  return (combination(n - 1, k - 1) * n) / k;
}

//???????????????????????????
// 조합 이해를 못함

// 1 vowel 선택 : 5 개 케이스 만;
// 2 vowel 선택 :
// C (5,2) = 10 가지 선택 조합을 선택할 수 있습니다. 예를 들어 a와 i를 선택하겠습니다.
// 하나의 경우는 a-a-a-a-i-i입니다. 이 경우 a를 i로 변경하는 변환점은 하나뿐입니다. 변환 포인트가 될 후보는 n-1 = 5 개이므로 가능한 총 문자열 수는 C (5,2) * C (5,1) = 50입니다.
// 모음 3 개 선택 :
// a-a-e-i-i-i를 예로 들어 보겠습니다. 우리는 a-> e와 e-> i를 각각 변환하기위한 변환점으로 2 개의 위치를 ​​선택해야합니다. 즉, C (n-1, 2) = C (5, 2) = 10입니다.
// 따라서이 경우 가능한 총 수는 C (5,3) C (n-1,2) = 100입니다.
// 모음 4 개 선택 : C (5,4) C (n-1,3) = 50
// 5 개 모음 선택 : C (n-1,4) = 5
