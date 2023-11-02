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

// 검색 창 토글
const headerEl = document.querySelector('header');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');

searchStarterEl.addEventListener('click', showSearchPanel);
searchCloserEl.addEventListener('click', hideSearchPanel);
searchShadowEl.addEventListener('click', hideSearchPanel);

function showSearchPanel() {
  /**검색창 보이기 */
  headerEl.classList.add('searching');
  document.documentElement.classList.add('fixed');
}

function hideSearchPanel() {
  /**검색창 숨기기 */
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed');
}
