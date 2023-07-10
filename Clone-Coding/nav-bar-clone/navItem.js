const toggleBtn = document.querySelector(".navbar-toggleBtn");
const menuItems = document.querySelector(".menu-items");
const snsIcons = document.querySelector(".sns-icons");

toggleBtn.addEventListener("click", () => {
  menuItems.classList.toggle("active");
  snsIcons.classList.toggle("active");
});

/**classList.toggle
 * - 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
 * 때문에 CSS에서 .active를 붙여 선택자를 만들었으며, toggle시에 생성 / 삭제 되기 때문에 toggle의 방식으로 사용 가능하다.
 */
