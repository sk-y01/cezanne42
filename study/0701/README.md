# 2025.07.01

## 참여자
```
이정재, 박수림, 이하늘

17:20 - 19:00
```

## 스터디 내용
```
	// 13. 다음과 같이 배열이 있다.
	// 배열에서 요소의 값이 0인 부분의 값을 1씩 증가 시키고, 1인 부분의 값을 2씩 증가시키는 프로그램을 완성하시오.
	const newArray = array.map(arr => {
		return arr.map(ar => {
			if (ar === 0) {
				return ar += 1; // ar = ar + 1;
			} else if (ar === 1) {
				return ar += 2;
			}
		});
	});

	console.log('newArray :: ', newArray);
```

* scope
	- 선언한 변수의 적용 범위

* 변수의 예약어 3가지
	- var, let, const

* var
	- 함수 스코프

* let, const
	- 블록 스코프

* 지역 스코프
	- 변수를 특정 영역에서만 사용할 수 있을 때
	- 즉, `지역 변수`

```
	function sum(a, b) {
		let result = a + b;
	}
	// console.log('result :: ', result);
	// result는 함수 내에서 선언되었기 때문에 함수를 벗어나는 순간 result 변수의 스코프는
	// 사라진다.
```

* 전역 스코프
	- 프로그램 시작 부분에서 변수 선언 시, 프로그램 전체에서 사용 가능
	- 즉, `전역 변수`

```
	const hi = 'hello'; // 전역 변수

	function greeting() {
		console.log(hi);
	}

	greeting();
```

```
	let hi = 'hello';		// 전역 변수

	function change() {
		hi = 'Bye';				// 함수에서 전역 변수 수정 가능
	}

	console.log(hi);		// hello (이유 : 함수 호출 전 전역 변수인 hi 값 출력)
	change();
	console.log(hi);		// Bye (이유 : 함수 호출 후 hi 값 출력)
```

* 블록 스코프
	- 블록 (`{}`)
	- 블록별 변수의 유효 범위가 결정
	- 대표 : let, const
	- 기본적으로 변수가 선언된 블록 내에서만 유효

```
	const factor = 5;						// 전역 변수

	function calc(num) {
		return num * factor;
	}

	{
		let result = calc(10);		// 지역 변수
		console.log('result :: ', result);
		console.log('factor :: ', factor);
	}
```

* 변수 사용(작성)할 때 유의
	1. let, const 변수 사용

	2. 전역 변수는 최소한으로 사용
		- 어디에서든지 값을 변경할 수 있으므로 예상치 못 한 곳에서 값이 달라질 수 있기 때문
		- 오류 발생 확률 증가
		- 상수만 const로 선언

	3. 객체 선언은 const 사용
		- 객체는 const로 선언해도 객체 내 프로퍼티는 얼마든지 수정 가능

* 함수 표현식
	- 익명, 기명, 즉시 실행 함수

* 익명 함수
	- 함수명이 없는 함수

```
	// 변수에 할당해서 사용하는 익명 함수
	let sum = function(a, b) {
		return a + b;
	}

	let sum2 = (a, b) => {
		return a + b;
	}

	// let sum2 = (a, b) => a + b;

	// 화살표 함수 축약형
	// let func = (a) => {
	// 	return a;
	// }
	let func = a => a;


	// 함수 호출
	sum(10, 20);
	sum2(10, 20);
```