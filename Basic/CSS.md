# CSS

- 드림코딩 Youtube 참고

1. 드림코딩 CSS 레이아웃 정리 display, position 완벽정리
   <https://youtu.be/jWh3IbgMUPI>

### 참고사이트

1. MDN css Reference
   <https://developer.mozilla.org/ko/docs/Web/CSS/Reference>

## 1. 의미 , 정의

- Cascading Style Sheet
- Cascade : 폭포처럼 쏟아지는 물
- 정의된 세부적인 명시가 있다면, 그것을 사용하고, 정의가 되어있지 않다면 Browser의 기본 스타일을 따라간다.

## 2. 스타일

### CSS 스타일

- Author Style (우리가 지정해놓은 스타일) → User Style → Browswer Style

### **important**

```css
!important
```

- !important 명령어는 제일 중요한 Style이라는 것을 명시한다.
- 가능하면 쓰지않는 것이 좋다!

### selectors

1. universal : \* (전체)
2. type : tag (div, span)
3. ID : #id (#name)
4. class : .class (.item, .username)
5. state : ':'(:hover, :click)

### pading , margin

- top / right / bottom / left 순서로 선언가능(시계방향)

```css
.red {
  width: 100px;
  height: 100px;
  padding: 20px 20px 20px 20px;
  margin: 15px 10px 12px 5px;
}
```

- 인수가 2개 일때는 top + bottom / right + left에 대한 값을 삽입하는 경우

```css
.red {
  padding: 20px 0px;
  /* top + bottom = 20px padding */
  /* right + left = 0px padding */
}
```

### border

- border-width, border-style, border-color
- width / style / color

```css
.red {
  border: 2px solid red;
  /*width = 2px
  style = solid
  color = red */
}
```

## 2. display & position

### display

- block level 엘리먼트와 inline level 엘리먼트를 이용한다.

- inline level 태그를 block 속성으로 변경

```css
div {
  display: block;
}
```

- inline은 기본적으로 contents 만을 꾸며주기 때문에, contents (내용)이 없는 엘리먼트는 표시되지 않는다.
- block 인 div를 contents(내용)없이 display 속성을 inline으로 바꾸면 표시되지 않는다.

- **inline-block**

  - inline 단위의 block 으로 엘리먼트를 표시한다.

- inline : 물건에 집중
- inline-block : 상자인데 한줄에 여러개 진열
- block : 상자인데 한줄당 하나만 놓음

## position

    - Element의 Default position 은
    'static' 으로 지정된다.

### **relative**

- 원래 유지되어야 하는 속성 과는 다르게 사용자가 지정한 위치로 포지셔닝할수있게한다.
- 원래 아이템이 있어야 하는 자리에서 '상대적으로' 이동
  ```css
  div {
    position: relative;
  }
  ```

### **absolute**

- 엘리먼트를 포함하고 있는 부모의 위치를 참조한다.
  ```css
  div {
    position: absolute;
  }
  ```

### **fixed**

- box에서 완전히 벗어나 winodw의 개념 단위에 포지션 하게 된다.
  ```css
  div {
    position: fixed;
  }
  ```

### **sticky**

- 원래있어야 하는 자리에 유지하면서 스크롤이 내려가도 그 위치를 그대로 지킨다.

```css
div {
  position: sticky;
}
```
