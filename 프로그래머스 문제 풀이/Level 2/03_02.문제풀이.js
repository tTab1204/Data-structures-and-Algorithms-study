// 1. 위장

// 해시 문제니까 해시로 풀어..

// 혼자 못 풀었다.

// 1. 빈 객체(obj)생성
// 2. obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(옷의 개수)을 더해줌.
// 3. obj에 해당 키가 있으면 해당 키의 값을 불러오고 1을 더해줌.
// 4. for in 구문으로 obj의 키를 반복하여 불러오고 해당 값을 answer에 곱해줌
// 5. -1의 이유는 최소한 1가지 이상의 옷을 입기 떄문에 옷을 입지 않은 경우 제외.

function solution(clothes) {
  let answer = 1;

  let obj = {};

 clothes.forEach(element => {
     // 여기 이해를 못하겠다.
        if(obj[element[1] >= 1]) {
            obj[element[1] += 1]
        }

        else {
            obj[element[1]] = 1
        }
 });

  for (let key in obj) {
    answer *= obj[key];
  }
  return answer - 1;
}

// Java풀이
public int solution(String[][] clothes) {
    int answer = 1;

     Map<String, Integer> clothesMap = new HashMap<>(); // 종류 : 갯수

     for (int i = 0; i < clothes.length; i++) {
         // 종류 여부 판단. 같은 종류 일 경우 Value + 1
         clothesMap.put(clothes[i][1], clothesMap.getOrDefault(clothes[i][1], 0)+1);
     }

     // 경우의 수 체크 answer *= (옷 가지수 + 안 입을 경우)
     for (int val : clothesMap.values()){
         answer *= (val+1);
     }

     // 모두 다 안입는 경우는 존재하지 않으므로 -1
     return answer-1;
 }
 // 모르겠다.. 경우의 수 구하는 건데.. 모르겠다..

 // 2. 타겟 넘버

function solution(numbers, target) {
    var answer = 0;
  // 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
    recur(0, 0);
    return answer;

    function recur(count, sum){
      // leaf node 도착했을 때, 모든 numbers 탐색
        if( count === numbers.length){
          // 주어진 조건에 만족하면 answer++
            if(sum === target ){
                answer++
            }
          // 리턴해주어야함
            return
        }

      // left child 는 +일 경우
        recur(count+1, sum+numbers[count]);
      // right child 는 -일 경우
        recur(count+1, sum-numbers[count]);
    }
}

// 다른 사람의 풀이

function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}

// 3. 다음 큰 숫자

//조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
//조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
//조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
function solution(n) {
    var answer = 0;
    var target = n+1;
    var strN = n.toString(2);
    var countOne = strN.split('').filter(str=> str==='1').length;
    
    while(target>n){
      if(countOne === target.toString(2).split('').filter(str=> str==='1').length){
        break;
      }
      target=target+1;
    }
    
     answer = target;
      return answer;
  }

  //어떻게 풀었지?
 
// 4. 숫자의 표현
function solution(num) { 
  var answer = 0; 
  for(var i=1; i<=num; i++) { 
    if (num%i == 0 && i%2 == 1) answer++ 
  } 
    return answer; 
  }

  // 어떻게 푼지 모르겠다.
