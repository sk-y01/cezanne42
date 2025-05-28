# 2025.05.28

## 참여자
```
이정재, 박수림, 이하늘, 전하람

17:25 - 19:00
```

## 스터디 내용
- 자료형
	1. String()
	2. Number()
	3. Boolean()

```
	<code>
		Boolean(5 * 4);
		Boolean('Hi');
		Boolean(-1);
		Boolean(0);
		Boolean(undefined);
	</code>
```

- Javascript 5대 false
	1. null
	2. 0
	3. ''
	4. undefined
	5. NaN (Not a Number)

- let
	1. 재선언 불가
	2. 재할당 가능
	3. 선언 및 할당 동시에 가능 / 선언 따로 할당 따로 가능

- const
	1. 재선언 불가
	2. 재할당 불가
	3. 동시에 선언 및 할당 필수

- 강제 형 변환
```
	<code>
		console.log(Number(true));	// result : 1
		console.log(NUmber('Hi'));	// result : NaN
		console.log(Number('20'));	// result : 20
	</code>
```

- 자동 형 변환
```
	<code>
		const one = '20';
		const two = 10;

		console.log(one + two);	// result : "2010"
		console.log(one - two);	// result : 10
	</code>
```


- 산술 연산자
	1. `+`
	2. `-`
	3. /
	4. %
	5. `*`
	6. ++
	7. --

```
	<code>
		document.addEventListener('DOMContentedLoaded', () => {
			let a = 10;
			++a;
			a++;
			
			console.log('a :: ', a);

			let x = 10, y = 4, result;
			result = x + y--;
			result = ++x - y;

			console.log('result :: ', result);
		});
	</code>
```

- 연결 연산자
	1. `+`

```
	<code>
		let name = '도레미';
		
		console.log(name + '님, 안녕하세요");
	</code>
```

- 대입 연산자
	1. +=
	2. -=
	3. =
	4. *=
	5. /=
	6. %=

```
	<code>
		const x = 0, y = 2;
		
		console.log(x += y);
		console.log(x -= y);
	</code>
```

- 비교 연산자
	1. ===
	2. ==
	3. !=
	4. !==

```
	<code>
		const num1 = 3, str1 = '3';

		console.log(num1 == str1);
		console.log(num1 != str1);
		console.log(num1 === str1);
		console.log(num1 !== str1);
	</code>
```


```
	문제. 사용자가 프롬프트 창에 입력했을 때, 그 숫자를 함수로 넘겨주고 함수에서는
	양수, 음수, 0인지 판단 후 알림창으로 보여주는 프로그램
	
	<code>
		document.addEventListener('DOMContentedLoaded', () => {
			// 넘겨 주려면 ? 매개변수
			// 익명 함수
			const isNegative = (number) => {
				if (number > 0) {
					alert(`${number}는 양수입니다.`);
				} else if (number < 0) {
					alert(`${number}는 음수입니다.`);
				} else if (number === 0) {
					alert(`${number}는 0입니다.`);
				} else {
					alert(`잘못된 입력입니다.`);
					location.reload();
				}
			};
			// 프롬프트로 입력
			const inVal = Number(prompt('숫자를 입력하세요.', ''));
			isNegative(inVal);
		});
	</code>
```