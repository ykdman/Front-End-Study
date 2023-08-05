# Travelix Clone Coding

> 사용 Skill

- HTML
- CSS
- Vanila JavaScript

## HTML

## CSS

> gradient 설정

```css
:root {
  --gradient-color: linear-gradient(
    to right,
    var(--yellow-solid),
    var(--purple-light)
  );
  --gradient-color-alt: linear-gradient(
    to right,
    var(--purple-light),
    var(--yellow-solid)
  );
}
```

> color : inherit 속성

```css
div {
  color: gray;
}

div a {
  color: inherit;
}
```

- inherit 속성은 자신의 부모의 속성을 **상속받는** 명령이다.
- 위 코드에서 div 안에 들어있는 a 태그 들은 자신의 부모인 div 태그의 color를 상속받게 된다

- linear-gradient(방향/각도, 색상1, 색상2) 의 인수를 받는다 (선형 gradient)

- 참고링크:
  <https://penguingoon.tistory.com/267>

> z-index

- 요소간의 표시 우선순위를 주기 위한 속성
- z-index의 값이 클루속 뒤로 보내지고, 낮을수록 앞으로 나오게 된다

```css
.nav {
  z-index: 999;
}
```

> opacity

- 요소의 투명도를 설정 할 수 있다
- 0.0 ~ 1.0 까지 설정
- 0 은 완전 투명

> transform : scale()

- transform : 변형
- scale : 크기변경, scale(x,y) 인수를 받으며, 1은 크기그대로, 2부터 2배를 받고 0은 완전히 화면상에서 지운다

## JS

> classList.toggle

```js
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  // console.log(header.classList);
  header.classList.toggle("menu-open");
});
```

- 위의 코드 분석

  1. .header 와 .hamburger-menu 를 document.querySelector로 할당 (header, hamburgerMenu)
  2. hamburgerMenu가 Click 될 떄의 이벤트 추가
  3. header 요소에 바로 밑에 .menu-open div toggle

- 수행

  - hamburgerMenu 클릭 전 header 태그 상태

  ```html
  <header class="header">...</header>
  ```

  - hamburgerMenu 클릭 후 header 태그 상태

  ```html
  <header class="header menu-open"></header>
  ```
