# JS INFO - JS 기본

## 문(statement)

> <https://ko.javascript.info/structure>

- **Statement** 는 어떤 작업을 수행하는 문법구조와 명령어 를 의미한다

```JS
alert('Hello'); alert('World');
```

- 세미콜론 (;) 은 문의 끝을 의미
- 줄바꿈으로 세미콜론을 대체할 수 있다.

- 대부분의 경우, 줄바꿈은 세미콜론을 의하지만, 모두의 경우는 아님

```js
alert(3 + 1 + 2);
```

- **세미콜론으로 문(StateMent) 를 마무리하는 습관을 가져야 한다**

## **주석**

- 한줄짜리 주석

```js
//
```

- 여러줄 주석

```js
/* */
```

- 주석 단축키

  1. 한줄 : Ctrl + /
  2. 여러줄 : Ctrl + Shift + /

- 주석은 중첩이 되지 않는다!

- 주석을 다는 것을 두려워 하면 안된다. 주석이 많다고 해서 배포되는 코드에 영향을 주지않는다

## 엄격모드 (strict)

- 레거시 JS와 ES5의 기능적인 부분이 다르기 떄문에, 레거시 JS 코드에서는 기존의 레거시함을 유지하기 위해 고안된 기능

- Strict Mode는 JS 코드에 모던함을 불러온다.

- Strict Mode 선언 방식

```js
"use strict";
// 이 코드는 모던한 방식으로 실행됨
```

- 사용하는 JS 코드의 최 상단에 'use strict' 를 사용함으로 써 JS의 Modern을 사용

> 'use strict' 최상단에 위치시켜야 하는 이유

```js
alert("some code");

("use strict");

// 엄격 모드가 활성화 되지 않는다.
```

- 모던 자바스크립트 는 Class 나 import 구문을 활용하게 되면 자동 적용 된다.

  → Class와 Import가 최신 문법이기 떄문

## 변수와 상수

- 변수는 정보를 저장 (값을 저장)하는 목적으로 사용된다

### 1. 변수

```js
let message;
message = "hello";
//문자열을 저장한다.
```

```js
//한줄에 여러변수 선언 (비추)
let user = "John",
  age = 25,
  message = "hi";
```

```js
//가독성 좋은 변수 선언
let user = "john";
let age = 25;
let message = "hello";
```

- 변수 명명 규칙

  - Camel Case

  1. 변수명에는 오직 문자와 숫자 $, \_ 만들어갈수 있다.
  2. 첫글자는 숫자가 될수 없다.

### 2. 상수

- 상수는 변하지 않는 값을 저장할때 사용
- 상수 선언때는 const를 활용한다.

```js
const myBirthday = "11.02.1999";
```

- 기억하기 힘든 값, 정해놓고 사용하는 값을 상수로 사용 하면 된다.

```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
```

> 바람직한 변수명

- userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.

- 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.

- 최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.

- 자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.

## 자료형

- JS 에는 8가지 자료형이 존재

### 1. 숫자형 (number)

- 정수 및 부동소수점 숫자 (float)
- 사칙연산
- 'Infinity', '-Infinity', 'NaN' 같은 특수숫자값이 존재

> **NaN**

- 계산중의 에러가 발생한것을 나타내느 값
- 부정확 하거나 정의되지 않은 수학연산을 수행시 에러가 발생하고 이때 NaN을 반환

```js
let calc1 = "숫자가아님" / 2; //NaN
let calc2 = "숫자가아님" / 2 + 5; //NaN
```

- NaN에는 어떠한 추가연산을 수행해도 값이 바뀌지 않는다.

> **BigInt**

- JS 에서는 2^53-1
  = 9007199254740991 보다 큰값 혹은
  -9007199254740991 보다 작은 정수는
  단순한 Number를 사용하여 나타낼수 없다

- BigInt는 길이에 상관없이 정수를 나타낼수 있다.

```js
const bigInt = 123123123123123123121324235245324542524523423423414n;
```

- Number의 끝에 **'n'** 을 붙여 BigInt형을 사용

### 2. 문자형 (String)

- String 의 표현 방식

  ```js
  //1. 큰따옴표
  let str1 = "Hello";

  //2. 작은 따옴표
  let str2 = "Hello";

  //3. 역 따옴표 (백틱)
  let str3 = `Hello`;
  ```

- 백틱 (`) 은 ${변수} 를 사용하여 문자열 안에 변수를 사용할수 있다.

```js
let userName = "John Doe";
console.log(`Hello I'm ${userName}`);
// Hello I'm John Doe
```

### 불린형 (Boolean)

- true / false 두가지만 존재

### null 값

- 어느 자료형에도 속하지 않은 고유의 값
- null 값은 오로지 null값만 포함하는 별도의 자료형
- JS 의 null
  = 존재하지 않는값, 비어있는 값, 알수없는값

### undefined 값

- null 값과 같이 자신만의 자료형으로 존재
- 값이 할당되지 않은 상태를 나타낸다.
- 변수는 선언 했지만 값을 할당 하지 않았다면 undefined 가 자동할당됨

```js
let age;
console.log(age);
// undefined
```

### typeof 연산자

- 사용 방식

  1. 연산자 : typeof x
  2. 함수 : typeof(x)

  - 둘의 결과값은 같다
  - x의 자료형을 문자열(String)으로 반환 한다.

  ```js
  typeof undefined; // "undefined"
  typeof 0; // "number"
  typeof 10n; // "bigint"
  typeof "foo"; // "string"
  typeof Symbol("id"); // "symbol"
  typeof null; //object
  /* null은 'object' 로 나오지만 object형이 아니다, 언어적 오류*/

  typeof alert; // "function"
  ```

## 사용자 상호작용 (alert, prompt, confirm)

> 최소한의 사용자 상호작용 기능

- alert
- confirm
- prompt

### 1. alert

```js
alert("Hello");
```

- 함수가 실행되면 브라우저의알림창으로 인수로 입력한 메세지가 나오게 함

### 2. prompt

```js
result = prompt(title, default);

/**
 * title
 * - 사용자에게 보여줄 문자열
 * default
 * - 입력 필드의 초깃값
 */
```

- 텍스트 메시지와 Input Field 및 확인, 취소 버튼이 있는 모달창을 띄워준다.
- default 인수는 선택사항 이지만, IE에서는 필수로 넣어주어야 한다.

### 3. confirm

```js
let result = confirm("question");
```

- 매개변수로 받은 question 과 확인 및 취소 버튼이 있는 모달창을 출력

- 사용자 확인 클릭 : true 반환
- 사용자 취소 클릭 : false 반환

## 형 변환 (type Conversion)

### 1. 문자형으로 변환

```js
let value = true; //boolean
console.log(typeof value);
// boolean

value = String(value);
console.log(typeof value);
// string
```

### 2. 숫자형을 변환

- 숫자형의 변환은 수학과 관련된 함수의 표현식에서 자동으로 발생

  ```js
  console.log("6" / "2");
  // 3
  ```

- Number를 이용한 변환

  ```js
  let str = "123";
  console.log(typeof str);
  // string

  let num = Number(str);
  console.log(typeof num);
  // number
  ```

  - 숫자형 변환이 불가능 한 경우

  ```js
  let age = Number("임의의 글자 123");
  console.log(age);
  // NaN
  ```

  ![number](img/number-convert-rule.png)

### 3. 불린형을 변환 (Boolean)

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // true

console.log(Boolean("hello")); //true
console.log(Boolean("")); //false (빈 문자)

console.log(Boolean(" "));
// true (공백도 문자이기 때문에)
```

## 기본 연산자와 수학

- 단항 연산자

```js
let x = 1;
x = -x;
// 단항 마이너스 연산자는 부호를 반전시킴
```

- 이항 연산자

```js
let x = 1;
let y = 3;
console.log(y - x);
// 항이 두개인 이항 연사자
```

- 기본 연산자

  - 덧셈 : +
  - 뺄셈 : -
  - 곱셈 : \*
  - 나눗셈 : /
  - 나머지 : %
  - 거듭제곱 : a\*\*b (a^b)

> 거듭제곱 Tip

```js
let test1 = 4 ** (1 / 2);
let test2 = 8 * 8(1 / 3);

conosle.log(test1);
// 2, 1/2 은 제곱근을 구할수 있다.
console.log(test2);
// 2, 1/3 은 세제곱근을 구할수 있다.
```

> 덧셈 연산자와 문자열

```js
let str = "my" + "string";
console.log(str);
// mystring
```

- 피연산자 중 하나라도 문자열이라면, 다른하나도 문자열로 변환된다.

```js
console.log("1" + 2); //'12'
console.log(2 + "1"); //'21'
```

```js
console.log(2 + 2 + "1");
// '41' (2+2가 먼저 수행 후 + '1')
```

> 다른 연산자와 문자열

```js
console.log(6 - "2");
// 4
console.log("6" / "2");
// 3
```

> 단항 연산자 +와 숫자형 변환

```js
// 숫자에는 아무런 영향을 미치지 않습니다.
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert(+true); // 1
alert(+""); // 0
```

```js
let apple = "2";
let oranges = "3";

console.log(apple + oranges);
// "23";

console.log(+apple + +oranges);
// 5
// 단항 +연산은 피연산자를 숫자로 변환
```

> 할당 연산자

- 할당연산자는 연산 순서가 우측부터 진행 된다.

```js
let x = 2 + 2 + 1;
// x = 5;
```

- 할당 연산자의 작동 원리

```js
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);
// 1. (a = b + 1)에서 b+1우선
// 2. (a = 3) 상태로 3을 재할당
// c= 3 - a
// c= 3-3 = 0이 된다.
```

- 할당 연산자 체이닝 (비 권장)

```js
let a, b, c;
a = b = c = 2 + 2;

// 평가는 우측 2+2부터 진행
// a, b, c 모두 4를 갖는다.
```

- 복합 할당 연산자

```js
let n = 2; //2
n += 5; // 2+5 = 7
n *= 2; // 7*2 = 14

let n1 = 2;
n1 *= 3 + 5;
// 3 + 5 먼저 계산 후 * 2
// 16
```

> 증가 감소 연산자

- ++ 는 증가
- -- 는 감소

```js
let counter1 = 2;
counter++;
console.log(counter1); // 3

let counter2 = 2;
counter--;
console.log(counter2); // 1
```

- 전위형

  - ++ / -- var
  - 전위형은 **연산 전**의 변수 값을 반환

- 후위형

  - var ++ / --
  - 후위형은 **연산 후**의 변수값을 반환

```js
let counter1 = 1;

let a = ++counter1;
console.log(a); //1, 연산전의 변수값 반환

let counter2 = 1;

let b = counter++;
console.log(b); //2, 연산 후의 변수값 반환
```

> 비트 연산자
> <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators>

- AND : &
- OR : |
- XOR : ^
- NOT : ~
- LEFT SHIFT : <<
- RIGHT SHIFT : >>
- 부호없는 오른쪽 시프트 : >>>

> 쉼표 연산자

- 여러 표현식을 코드 한줄에서 평가할수 있게 해주지만, 마지막 표현식의 결과만 반환된다.

- 잘 쓰이지 않는 연산자

```js
let a = (1 + 2, 3 + 4);
console.log(a); // 7 (3 + 4의 결과)
```

## 비교 연산자

- <, >
- =>, <=
- == (===)
- != (!==)

> 문자열 비교

- 자바 스크립트는 '사전' 순서대로 문자열을 비교한다.(정확히는 유니코드 순)
- 알파벳이 사전의 뒤에 있는 문자일 수록 크다고 판단된다.

  > > 문자열 비교 순서

  1. 두 문자열의 첫 글자를 비교
  2. 첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 첫 번째 문자열이 두 번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료
  3. 두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교
  4. 글자 간 비교가 끝날 때까지 이 과정을 반복
  5. 비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론 냅니다. 비교가 종료되었지만 두 문자열의 길이가 다르면 길이가 긴 문자열이 더 크다고 결론

> 다른 형을 가진 값 간의 비교

- 비교하려는 값의 자료형이 다르면 JS는 이 값들을 숫자형으로 변환하여 비교

```js
console.log("2" > 1); // 2 > 1 => true
console.log("01" == 1); // 1 == 1 => true

// Boolean
console.log(true == 1); // true 는 1로 변환 됨 => true
console.log(false == 0); // false는 0으로 변환 => true
```

> null 이나 undefined 와 비교

```js
console.log(null === undefined); // false (===)
console.log(null == undefined); // true (==)
```

- 다른 비교 연산자로 null 과 undefined 비교

  - null -> 0 변환 후 비교
  - undefined -> NaN 변환 후 비교

> null 과 0 비교

```js
console.log( null > 0 ); // false
console.log( null -- 0 ); // false
console.log( null >= 0 ); // true !!!

// 동등 연산자(==) 비교시 null 은 0으로 변환되지 않는다.
// 동등 연산자(==) 는 null 이나 undefined 를 형변환 후 비교하지 않는다.
```

> undefined의 비교 불가능함

```js
console.log(undefined > 0); // false, undefined -> NaN
console.log(undefined < 0); // false, undefined -> NaN
console.log(undefined == 0); // false
```

> 비교연산 시 주의점

- 일치 연산자 (===) 를 제외한 비교 연산자의 피연산자의 자리에 null 이나 undefined 가 오지 않도록 주의

- undefined나 null 이 될 가능성있는 변수가 피연산자가 되지 않게 해야 한다.

## if 와 '?' 를 사용한 조건 처리

> 조건부 연산자 '?' **(삼항 연산자)**

- 조건에 따라 다른 값을 변수에 할당 해주어야 할때 사용

```js
let result = condition ? var1 : var2;
/**
 * condition 이 true 일 때 : var1 을 result에 할당
 * condition 이 false 일 때 : var2 를 result에 할당
 */

let age = 19;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed); // true
```

> 다중 삼항 연산자

```js
let age = prompt("나이를 입력 해 주세요", 18);

let message =
  age < 3
    ? "안녕 아기야"
    : age < 18
    ? "안녕!"
    : age < 100
    ? "환영합니다!!!"
    : "연세가 아주 많으시군요!!";

console.log(message);
/**
 * 1. age < 3 : '안녕 아기야'
 * 2. 3 < age < 18 : '안녕!'
 * 3. 18 < age < 100 : '환영합니다!'
 * 4. 100 < age : '연세가 아주 많으시군요!'
 */
```

<br>

## 논리 연산자

> OR ( || )

```js
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// 피 연산자가 boolean 형이 아니면 형변환 후 평가한다
// 1 -> true , 0 -> false
if (1 || 0) {
  //if(true || false)
  console.log("truthy!");
}
```

> JS OR 연산의 특이한 점

```js
reuslt = value1 || value2 || value3;
```

- 이때, OR 연산자는 밑의 순서에 따라 연산을 수행 한다.

  1. 왼쪽 -> 오른쪽으로 평가
  2. 각 피연산자를 boolean 형으로 변환 후, 그 값이 true면 연산을 멈춤
  3. 이때, boolean 값이 아닌 피연산자의 **원래 값** 을 반환
  4. 피연산자 모두를 평가한 경우 (모두 false)엔 마지막 피연산자를 반환

  ```js
  alert(1 || 0); // 1 (1은 truthy임)

  alert(null || 1); // 1 (1은 truthy임)
  alert(null || 0 || 1); // 1 (1은 truthy임)

  alert(undefined || null || 0); // 0 (모두 falsy이므로, 마지막 값을 반환함)
  ```

## nulish 병합 연산자 '??'

> a ?? b

- a 가 null 도 아니고, undefined도 아니라면 a로 값 확정

- 그 외에는 b로 값을 확정

```js
let x = a !== null && a !== undefined ? a : b;
```

- 즉 **??** 연산자는 피연산자의 값이 null 또는 undefined에 대한 분기조건을 가지며, 이에 대한 할당을 수행

```js
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

console.log(firstname ?? lastName ?? nickName ?? "익명사용자");
// "바이올렛"
/**
 * 1. firstName !== null && !== undefined => firstName 할당 | lastName 할당
 * 2. lastName !== null && !== undefined => lastName할당 | nickName 할당
 * 3. nickName !== null && !== undefined => nickName 할당 | '익명사용자'할당
 */
```

## while 과 for 반복문

> **while 반복문**

```js
while (condition) {
  // body
  // loop Process Code
}
```

- condition이 truthy이면 body가 실행된다

> **do-while 반복문**

```js
do {
  // body
} while (condition);
```

- body가 처음에 먼저 한번 실행 된다
- 첫 body 실행 후, while의 condition을 확인한다

> **for 반복문**

```js
for (begin; condition; step) {
  //body
}
/**
 * begin : loop 진입 초기에 한번 실행
 * condition : 반복마다 확인되는 조건, false일 때 반복을 중지한다
 *
 * step : 각 반복의 body가 실행 된 이후에 실행 된다.
 */
```

```js
// 무한 for loop
for (;;) {
  //body
}
```

> 반복문을 빠져나오기 (break)

```js
let sum = 0;

while (true) {
  let value = +prompt("숫자입력");
  if (!value) break;
  sum += value;
}

console.log("합계 :" + sum);
```

- **break** 구문으로 원하는 때에 언제든지 반복문을 빠져 나올 수 있다.

> 다음 반복으로 넘어가기 (continue)

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  //위 조건이 참일 떄, 나머지 코드는 수행되지 않고 다음 loop item으로 반복이 넘어감
  console.log(i);
}
```

> 레이블 과 break, continue

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`${i},${j}의 값`, "");
    // 여기서 break 로는 j를 body로 loop하는 반복만 빠져나올 수 있다.
  }
}
```

- 위 와 같이 중첩 반복문의 전체 구문에서 빠져나와야 할때는 레이블을 이용해야 한다

```js
labelName : for (...) {
  // body
}
```

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`${i},${j}`, "test");

    if (!input) break outer;
    // 레이블 전체를 빠져나온다.
  }
}
```

## switch 문

- 복수의 if 조건을 switch 문으로 바꿀수 있음
- 특정변수를 다양한 상황에서 비교할 수 있게 해준다

```js
let a = 4;

switch (a) {
  case 3:
    console.log("up");
    break;
  case 4:
    console.log("correct!");
    break;
  case 5:
    console.log("down");
    break;
  default:
    console.log("어떤값인지 파악이 안돼..");
}
```

    1. a 의 값을 1번 case의 3값과 비교
    2. a의 값을 2번 case의 4 값과 비교
    -> a === 4이므로 "correct!" 를 반환 하고 종료
    3. case에 적합한 condition이 없다면, default 부분을 수행후 종료

```js
// break 가 없는 switch 문
let a = 2 + 2;

switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
  case 4:
    alert("비교하려는 값과 일치합니다.");
  case 5:
    alert("비교하려는 값보다 큽니다.");
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}
/**
 * 이때 switch의 case 별 break가 없으므로 수행되는 case는
 * case 4 -> case 5 -> default 가 수행됨
 */
```

> 여러개의 'case' 문 묶기

```js
let a = 3;

switch (a) {
  case 4:
    alert("계산이 맞습니다!");
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert("계산이 틀립니다!");
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert("계산 결과가 이상하네요.");
}
```
