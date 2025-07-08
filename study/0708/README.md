# 2025.07.08

## 참여자
```
이정재, 박수림, 이하늘

17:25 - 19:05
```

## 스터디 내용
### 데이터 불변성 (Immutability)
* 원시 데이터
	- String, Number, Boolean, undefined, null

* 참조형 데이터
	- Object, Array, function

* Javascript 데이터의 불변성
	- 새로운 원시 데이터 사용 시, 그 원시 데이터가 있다면 기존 메모리 주소에 들어있다면
	- 새로 만드는 것이 아닌 기존 존재하는 메모리 주소만 바라봄.

* 원시 데이터의 경우, 최초 메모리에 생성되면 항상 불변
	- 쉽게 말하면 생긴 것이 다르면 그냥 다른 데이터

```js
let a = 1;	// 첫번째 메모리 주소를 바라본다.
let b = 4;	// 두번째 메모리 주소를 바라본다.
console.log('a === b', a, b, a === b);	// result :: 1, 4, false

b = a;			// b는 a의 메모리 주소를 바라본다.
console.log(a, b, a === b); // result :: 1, 1, true

a = 7;
console.log(a, b, a === b); // result :: 7, 1, false

let c = 1;	// 값이 1이므로 첫번째 메모리 주소에 할당
console.log('b, c, b === c :: ', b, c, b === c);	// result :: 1, 1, true
```

* 참조형 데이터
	- 불변성 존재 X
	- `가변성 데이터`라고도 불림
	- 복사 개념이 아닌 메모리 주소만 같은 곳을 바라보게 만듦. (참조)
	- 주의 : 같은 메모리 주소를 바라볼 경우, 의도치 않게 값이 변경될 수 있음.

```js
let a = { k: 1 };
let b = { k: 1 };
console.log('a, b, a === b', a, b, a === b); // result :: { k: 1 }, { k: 1 }, false
// 이유 : a, b는 서로 다른 메모리 주소를 바라보고 있기 때문

a.k = 7;
b = a;		// b는 a의 메모리 주소 참조
console.log('a, b, a === b', a, b, a === b); // result :: { k: 7 }, { k: 7 }, true

a.k = 2;
console.log('a, b, a === b', a, b, a === b); // result :: { k: 2 }, { k: 2 }, true

let c = b;
console.log('a, b, c, a === c', a, b, c, a === c); // result :: { k: 2 }, { k: 2 }, { k: 2 }, true

a.k = 9;
console.log('a, b, c, a === c', a, b, c, a === c); // result :: { k: 9 }, { k: 9 }, { k: 9 }, true
```

```js
const user = {
	name: 'jjlee',
	age: 32,
	emails: ['st20916@naver.com']
};

const copyUser = user;
console.log('copyUser === user :: ', copyUser === user);	// result :: true
// 이유 : 같은 메모리 주소를 바라보고 있기 때문에

user.age = 22;
console.log('user :: ', user); 					// result :: {name: 'jjlee', age: 22, emails: Array(1)}
console.log('copyUser :: ', copyUser);	// result :: {name: 'jjlee', age: 22, emails: Array(1)}
// 문제점 : user의 age 값만 변경한 줄 알았으나, copyUser의 값도 같이 수정됨.
// 이유 : copyUser와 user는 같은 메모리 주소를 바라보고 있다. (참조하고 있다.)

console.log('-------');
console.log('-------');

user.emails.push('st20916@kakao.com');
console.log('user.emails === copyUser.emails :: ', user.emails === copyUser.emails);	// result :: true
// 이유 : 배열 데이터도 참조형이고, 결국 emails라는 배열 데이터는 따로 복사를 해주지 않았기 때문에 true
```

* 얕은 복사 (Shallow Copy)
	- 겉 표면만 복사
	1. Object.assign({}, 출처 객체)
	2. 전개 연산자 (Spread Operator)를 통한 복사

```js
const user = {
	name: 'jjlee',
	age: 32,
	emails: ['st20916@naver.com']
};

// 1. Object.assign({}, 출처 객체)
// - 대상 객체에 출처 객체를 여러가지 속성들을 담아 반환 (새로운 객체 반환)
const assignUser = Object.assign({}, user);	
console.log('assignUser === user :: ', assignUser === user);	// result :: false

user.age = 23;
console.log('user :: ', user); // result :: {name: 'jjlee', age: 23, emails: Array(1)}
console.log('assignUser :: ', assignUser); // result :: {name: 'jjlee', age: 32, emails: Array(1)}
// 이제, 영향을 미치지 않음. (복사 개념)

// 2. 전개 연산자 (Spread Operator)를 통한 복사
const spreadUser = {...user};
console.log('spreadUser === user :: ', spreadUser === user);	// result :: false

user.emails.push('st20916@kakao.com');
console.log('user.emails === spreadUser.emails :: ', user.emails === spreadUser.emails);	// result :: true
// 이유 : 배열 데이터도 참조형이고, 결국 emails라는 배열 데이터는 따로 복사를 해주지 않았기 때문에 true
```

* 깊은 복사 (Deep Copy)