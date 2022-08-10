const clock = document.querySelector('h2#clock');
const date = new Date();

function sayHello() {
  console.log('hello');
}

// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

// console.log(date.getDate()); // 날짜
// console.log(date.getDay()); // 요일
// console.log(date.getFullYear()); // 년도
// console.log(date.getHours()); // 지금 몇시인지 중에서 시까지
// console.log(date.getMinutes()); // 지금 몇시인지 중에서 분
// console.log(date.getSeconds()); // 지금 몇시인지 중에서 초까지

//들어오는 인수가 10보다 작으면 0을 붙인 문자열로 바꾸는 함수
function isLessThanTen(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

function getClock() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clock.innerHTML = `${isLessThanTen(hour)}:${isLessThanTen(
    minute
  )}:${isLessThanTen(second)}`;
}

setInterval(getClock, 1000);
