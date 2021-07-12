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