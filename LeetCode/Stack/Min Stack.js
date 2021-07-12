// 최솟값을 바로 찾을 수 있는 스택을 설계하시오.

var MinStack = function () {
  this.elements = [];
};

/**
  
   @param {number} x
   @return {void}
   */
MinStack.prototype.push = function (x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};
/**
  
   @return {void}
   */
MinStack.prototype.pop = function () {
  this.elements.pop();
};
/**
  
   @return {number}
   */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].value;
};
/**
  
   @return {number}
   */
MinStack.prototype.getMin = function () {
  // elements 배열의 끝부분의 min속성을 return해줘라.
  return this.elements[this.elements.length - 1].min;
};

// 이거도 이해가 안됨. 어디서 설명을 듣고 싶다..
