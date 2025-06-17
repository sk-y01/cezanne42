# 2025.06.17

## 참여자
```
이정재, 박수림, 이하늘

17:30 - 18:50
```

## 스터디 내용
- for문
	- `조건식`이 만족할 때까지 특정 코드를 반복

- 데이터에 의한 방식
	- for ( in )
	- for ( of )
	- forEach()

```
	for (초기값; 조건; 증가/증감식) {
		반복할 실행문;
	}
```

```
	// 문제. 0 ~ 100까지 출력
	{
		for (let i = 0; i <= 100; i++) {
			console.log('i :: ', i);
		}
	}
```

```
	// 문제. 1 ~ 9까지 구구단 3단 출력
	for (let i = 1; i < 9; i++) {
		console.log(`3 * ${i} = ${3 * i}`);
	}
```
```
	// 문제. li를 10개 만드세요.
	document.addEventListener('DOMContentLoaded', () => {
		// li를 10개까지 만들어서 출력
		const ulEl = document.createElement('ul');

		for (let i = 0; i < 10; i++) {
			const liEl = document.createElement('li');
			liEl.textContent = `list-${i + 1}`;

			ulEl.appendChild(liEl);
		}

		document.body.appendChild(ulEl);
	});
```

- 배열의 개수를 가져오려면 ?
	- 배열명.length
- 배열에 접근하려면 ?
	- 배열명[index number]

```
	// 문제. for문을 통해 배열 값 가져오기
	const students = ['Park', 'Kim', 'Lee', 'Kang'];

	for (let i = 0; i < students.length; i++) {
		console.log('students :: ', students[i]);
	}
```

```
	// 문제. colors 배열 값 가져오기
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (let i = 0; i < colors.length; i++) {
		console.log('colors :: ', colors[i]);
	}
```

```
	// 문제. 1 ~ 100까지의 숫자 중
	// 5의 배수일 때, 5의 배수라고 출력
	// 7의 배수일 때, 7의 배수라고 출력
	// 5의 배수이면서 7의 배수일 땐 5와 7의 공배수 라고 출력
	// 콘솔에 출력하라 (단, i와 함께) = `` 사용
	for (let i = 1; i <= 100; i++) {
		if (i % 5 === 0 && i % 7 !== 0) {
			console.log(`${i} 는 5의 배수`);
		} else if (i % 5 !== 0 && i % 7 === 0) {
			console.log(`${i} 는 7의 배수`);
		} else if (i % 5 === 0 && i % 7 === 0) {
			console.log(`${i} 는 5와 7의 공배수`);
		} else {
			console.log(`${i}`);
		}
	}
```

- for ( in )
	- 객체, 배열 등 .. key, index number만 가져올 수 있다.
	- key 또는 배열 접근 시에 `[]` 반드시 사용한다.

```
	// 문제. for - in을 사용해 배열 값 가져오기
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (let idx in colors) {
		if (idx < colors.length) {
			console.log('for - in colors :: ', colors[idx]);
		}
	}
```

```
	// 문제. for - in을 사용해 배열 값 가져오기
	const numbers = [1, 2, 8, 10, 100, 95];

	for (let idx in numbers) {
		if (idx < numbers.length) {
			console.log('for - in numbers :: ', numbers[idx]);
		}
	}
```

- 객체 접근 방식
	1. 객체명.key
	2. 객체명[key]

```
	// 문제. for - in 을 사용해 객체 접근
	const obj = {
		// key: value = property
		title: "깃허브 입문",
		pages: 272,
		finished: true
	}

	for (let key in obj) {
		console.log('value :: ', obj[key]);
	}
```

- for ( of )
	- 문자열이나 배열과 같은 반복 가능한 자료(Iterator)에서 사용 가능

```
for (데이터 of 배열) { ... }
```

```
	// 문제. for ( of ) 를 사용해 배열 값 가져오기
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (color of colors) {
		console.log('for of로 출력 :: ', color);
	}
```