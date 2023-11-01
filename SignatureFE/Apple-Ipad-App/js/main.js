// 장바구니 메뉴 띄우기 / 지우기
const basketStarterEL = document.querySelector('header .basket-starter');
const baksetEl = basketStarterEL.querySelector('.basket');

basketStarterEL.addEventListener('click', function (event) {
  event.stopPropagation(); //상위 객체로의 전파를 멈춘다.
  if (baksetEl.classList.contains('show')) {
    //hide
    hideBasket();
  } else {
    //show
    showBasket();
  }
});

baksetEl.addEventListener('click', function (event) {
  // baksetStarterEl > basketEl 이기 떄문에, basketEl 안에서의 클릭이 상위로의 전파를 방지해야 장바구니가 열린다.
  event.stopPropagation();
});

window.addEventListener('click', function () {
  hideBasket();
});

function showBasket() {
  baksetEl.classList.add('show');
}

function hideBasket() {
  baksetEl.classList.remove('show');
}

// 검색 바 토글
const headerEl = document.querySelector('header');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = headerEl.querySelector('.search-closer');
const searchShadowEl = headerEl.querySelector('.shadow');

searchStarterEl.addEventListener('click', toggleHeaderSearchingClass);

searchCloserEl.addEventListener('click', toggleHeaderSearchingClass);

searchShadowEl.addEventListener('click', toggleHeaderSearchingClass);

function addHeaderSearchingClass() {
  headerEl.classList.add('searching');
}

function removeHeaderSearchingClass() {
  headerEl.classList.remove('searching');
}

function toggleHeaderSearchingClass() {
  headerEl.classList.toggle('searching');
  if (headerEl.classList.contains('searching')) {
    document.documentElement.classList.add('fixed');
  } else {
    document.documentElement.classList.remove('fixed');
  }
}
