// 1.캐시

// 혼자 못 풀었다.
function solution(cacheSize, cities) {
  // cities 배열이 없을 경우 0 리턴
  if (cities.length === 0) return 0;
  // cache가 없을 경우 모든 cities의 실행시간은 5. (cache miss)

  if (cacheSize === 0) return cities.length * 5;
  let queue = [];
  let answer = 0;

  // 모두 대문자로 바꿔줌 (문제에서 대소문자 구분을 하지 않는다고 했기 때문에)
  let bigCities = cities.map((v) => v.toUpperCase());

  for (let i = 0; i < bigCities.length; i++) {
    // queue가 cacheSize보다 작을 경우
    if (queue.length < cacheSize) {
      // queue에 bigCities의 요소가 있다면
      if (queue.indexOf(bigCities[i]) >= 0) {
        answer++; // cache hit

        // 캐시에서 지우고 큐의 제일 뒤에 넣어줌
        let target = queue.indexOf(bigCities[i]); // 인덱스 반환 - ex: 1
        let targetArr = queue.splice(target, 1); // 인덱스 1에 해당하는 요소 배열로 반환
        queue.push(...targetArr); //
      }
      // queue에 bigCities의 요소가 없다면 - cache miss
      else {
        queue.push(bigCities[i]);
        answer += 5;
      }
    }
    // queue가 cacheSize보다 큰 경우 (shift()를 해준다)
    else {
      if (queue.indexOf(bigCities[i]) >= 0) {
        answer++; // cache hit
        // 캐시에서 지우고 큐의 제일 뒤에 넣어줌
        let target = queue.indexOf(bigCities[i]); // 인덱스 반환 - ex: 1
        let targetArr = queue.splice(target, 1); // 인덱스 1에 해당하는 요소 배열로 반환
        queue.push(...targetArr); //
      }
      // queue에 bigCities의 요소가 없다면 - cache miss
      else {
        answer += 5;
        queue.shift();
        queue.push(bigCities[i]);
      }
    }
  }
  return answer;
}

// 코드 이해는 했는데.. 아직 확실하게 이해 못했다. 나중에 다시 ㄱㄱ

// 다른 사람의 풀이
function solution(cacheSize, cities) {
  const MISS = 5,
    HIT = 1;

  if (cacheSize === 0) return MISS * cities.length;

  let answer = 0;
  let queue = [];

  cities.forEach((city) => {
    city = city.toUpperCase();

    let idx = queue.indexOf(city);

    // queue에 해당 요소(city)가 없다면
    if (idx > -1) {
      queue.splice(idx, 1); // queue에서 해당 요소를 지워주고
      answer += HIT; // cache hit이니 answer++;
    }
    // queue에 해당 요소(city)가 있다면
    else {
      // queue의 길이가 cacheSize를 넘게 되면
      // head의 요소를 제거해준다.
      if (queue.length >= cacheSize) queue.shift();
      answer += MISS; // cache miss다
    }

    queue.push(city); // 어느 경우에든 push를 해야되니깐!
  });

  return answer;
}

// 확실하게 이해가 됐다! 다행이다
