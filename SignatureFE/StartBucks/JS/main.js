const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Search 패널 어느부분을 선택하면, searchInputEl에 JS로 focus를 가한다
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  // Search 의 Input 이열리면 placeholder로 '통합검색' text가 활성화 되게 한다
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  // Search 가 Blur 되면 (UnFocused) placeholder 를 지우고, SearchEl의 focused class를 지운다.
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  // searchInputEl.removeAttribute("placeholder");
});

// badge Scroll Down → Vanish
const badgeEl = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);
// _.throttle(함수, 시간ms) lodash

//  visual fade in
/** visual 의 cup1,2 spoon 이미지가 순차적으로 표시 */
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1,
  });
});

// Swiper Vertical : NOTICE SECTION
const swiper = new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
