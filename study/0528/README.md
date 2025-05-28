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

- 산술 연산자
	1. `+`
	2. `-`
	3. /
	4. %
	5. `*`
	6. ++
	7. --

- 연결 연산자
	1. `+`

- 대입 연산자
	1. +=
	2. -=
	3. =
	4. *=
	5. /=
	6. %=

- 비교 연산자
	1. ===
	2. ==
	3. !=
	4. !==

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