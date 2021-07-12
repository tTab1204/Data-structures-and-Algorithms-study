function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);

  let first = 0;
  let last = people.length - 1;
  let boat = 0;

  while (first <= last) {
    if (sortedPeople[first] + sortedPeople[last] <= limit) {
      first++;
    }

    last--;
    boat++;
  }
  return boat;
}
