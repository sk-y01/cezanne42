# 2025.06.18

## 참여자
```
이정재, 박수림, 이하늘, 전하람

17:25 - 19:05
```

## 스터디 내용
- for문
	- `조건식`이 만족할 때까지 특정 코드를 반복
- for ( in ), for ( of ), forEach()
	- `데이터` 기반의 반복문
	- 조건문, 초기값, 증가치 없음
	- `데이터 길이`만큼 반복

```
	// 문제. for ( in ), for ( of )
	const numbers = [10, 20, 30, 40, 50, 60];

	// numbers 안에 순서 값들을 idx로 전달
	// 데이터 길이만큼 반복하나 데이터를 전달하는 것이 아닌 데이터가 가진 인덱스 번호 반환
	for (let idx in numbers) {
		console.log(idx);						// result : 0, 1, 2, 3, 4, 5 (인덱스 번호만 출력)
		console.log(numbers[idx]);	// result : 10, 20, 30, 40, 50, 60
	}

	// 데이터 길이만큼 반복, 데이터를 매개변수에 직접 전달
	for (let num of numbers) {
		console.log('num :: ', num);
	}

	// for in, for of를 결합한 방식의 반복문
	// - 인덱스 번호, 데이터를 직접 반환, 원본 배열의 반환
	// 배열.forEach(callback);
	// callback(data, index, array)
	// 배열명.forEach((data, index, array) => {});
	// - 매개변수가 2개 이상일 경우, 반드시 () 작성.
	numbers.forEach((num, idx, arr) => {
		console.log('index :: ', idx);
		console.log('data :: ', num);
		console.log('array :: ', arr);
	});
```

```
	// 문제. for문으로 1 ~ 100 짝수 합계 구하기
	let sum = 0;
	for (let i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	console.log('sum :: ', sum);
```

```
	// 문제. colors 배열을 출력하세요.
	// 단, for - in, for - of, forEach를 사용하여 출력하세요.
	const colors = ['red', 'green', 'blue', 'yellow', 'skyblue'];

	// for - in
	for (let idx in colors) {
		console.log('for in :: ', colors[idx]);
	}

	// for - of
	for (color of colors) {
		console.log('for of :: ', color);
	}

	// forEach()
	colors.forEach(color => console.log('forEach :: ', color));
```

- 이중 for문
	- for문 안에 for문 존재

```
	// 문제. 이중 for문으로 구구단 만들기
	for (let i = 2; i <= 9; i++) {
		for (let j = 1; i <= 9; j++) {
			console.log(`${i} * ${j} = ${i * j}`);
		}
	}
```

- break문
	- for, while, switch 문에 서 특정한 문장을 실행 후
	- 즉시 종료

```
	for (let i = 1; i < 10000; i++) {
		if (i === 10) {
			break;
		}
		console.log('i :: ', i);	// result :: 1, 2, 3, 4, 5, 6, 7, 8, 9
	}

	for (let i = 1; i <= 5; i++) {
		if (i === 3) {
			break;
		}
		console.log('i :: ', i);	// result :: 1, 2
	}
```

- continue문
	- 반복문에서만 사용
	- 다음 문장을 실행하지 않는다. (Jump)
	- 그 후, 조건식 재검사

```
	// 문제. 1 ~ 10까지의 숫자 중 짝수를 출력하지 않는 프로그램 작성.
	for (let i = 1; i <= 10; i++) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(`number odd :: ${i}`);
	}
```

- return문
	- break와 유사하나 최종 값 반환 후 중지