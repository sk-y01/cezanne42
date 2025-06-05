# 2025.06.04

## 참여자
```
이정재, 박수림, 정경호, 이하늘, 전하람

17:25 - 19:10
```

## 스터디 내용
- 문자열끼리 비교
	- ASCII Code 값을 통해 비교
	- 대체적으로, 소문자가 대문자보다 ASCII 값이 높음.
	- 문자열 내 문자가 여러 개일 경우, 맨 앞에서부터 하나씩 비교

```
	<code>
		console.log("A" > "B");	// false
		console.log("Javascript" > "JAVASCRIPT"); // true
	</code>
```

- 논리 연산자
	- 참과 거짓을 이용해 조건을 체크할 때 사용
	1. NOT 연산자 (!) :: 피연산자의 반대 값을 가짐.
	2. AND 연산자 (&&) :: 모두가 true일 때만 true
	3. OR 연산자 (||) :: 둘 중 하나만 true여도 true

```
	<code>
		// 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false
		if (1 && 0) {
			console.log('if 문 안에 falsy가 들어가 있으므로 console에 찍히지 않습니다.');
		}

		console.log(1 && 2 && null && 3); // result :: null 반환
		console.log(1 && 2 && 3);					// result :: 3 반환
		console.log(1 && 0);							// result :: 0 반환
		console.log(1 && 5);							// result :: 5 반환
		console.log(null && 5);						// result :: null 반환

		console.log(true || true);		// result :: true
		console.log(false || true);		// result :: true
		console.log(true || false);		// result :: true
		console.log(false || false);	// result :: false

		// if (true || false) 랑 동일하게 동작
		if (1 || 0) {
			console.log('true');
		}

		const hour = 9;
		
		if (hour < 10 || hour > 18) {
			console.log('영업 시간이 아닙니다.');
		}

		// 
		const hour2 = 12;
		const isWeekend = true;

		// result :: true
		if (hour2 < 10 || hour2 > 18 || isWeekend) {
			// isWeekend 가 true 이기 때문
			console.log('영업 시간이 아닙니다.');
		}
	</code>
```

### 제어문
- if문
	- if 다음에 소괄호를 사용해 조건을 표기
	- 조건 체크 후, 결과 값이 true면 실행문 실행
```
	<code>
		let y = 10;
		if (y < 5) {
			console.log('y는 5보다 작습니다.');
		}
		y -= 5;
		// 결과는 5 반환
		// 이유 : if문에서 조건 체크 결과 false 이므로, 그 다음 문장인 y -= 5 실행
	</code>
```

- if - else문
	- 조건을 체크한 후, true일 때 처리할 명령(실행문)과 false일 때 처리할 명령(실행문)이
	- 따로 있다면, if - else문 사용
	- if - else문 안에 또 다른 if - else문 사용 가능
```
	<code>
			const userInput = prompt('이름을 입력하세요.');
			// 1번 방식
			if (userInput === null) {
				alert('취소했습니다.');
			} else {
				alert(userInput);
			}
			// 2번 방식.
			// if (userInput !== null) {
			// 	alert(userInput);
			// }
	</code>
```

- if - else if - else문
	- 1개의 값을 여러 조건으로 체크해야 할 때 사용
	- 앞에서 제시한 조건들이 맞지 않을 경우, else문 사용

- 조건(삼항) 연산자
	- 조건이 복잡하지 않고, true와 false가 명확할 경우, if문 대신 조건 연산자로 조건 체크
	- (조건) ? true일 때 실행문 : false일 때 실행문;

```
	<code>
		// 문제. 프롬프트로 점수를 입력 받고
		// 점수가 90점 이상이면 A
		// 점수가 80점 이상이면 B
		// 그 외의 점수면 C 를 주는 프로그램을 작성하세요.
		// 단, null일 경우, 다시 입력할 수 있도록 하세요.
		
		const score = Number(prompt('점수를 입력하세요'));
		if (score === null || score === 0 || isNaN(score)) {
			alert('취소 됐습니다. 다시 입력하세요.');
			location.reload();
		} else {
			if (score >= 90) {
				alert(`${score}는 A학점입니다.`);
			} else if (score >= 80 && score < 90) {
				alert(`${score}는 B학점입니다.`);
			}else {
				alert(`${score}는 C학점입니다.`);
			}
		}
	</code>
```

```
	<code>
		// 문제. 프롬프트로 숫자를 입력 받고
		// 짝수인 지, 홀수인 지 판별하는 프로그램을 작성하세요.
		// 단, 취소 버튼 클릭했는 지 확인 후, 클릭하지 않았을 때 조건이 진행되도록 하세요.
		// 짝수인 지 홀수인 지 판별은 삼항(조건)연산자로 작성하세요.
		const number = Number(prompt('숫자를 입력하세요.'));

		if (number !== null) {
			(number % 2 === 0) ? console.log(`${number}는 짝수입니다.`) : console.log(`${number}는 홀수입니다.`);
		}
	</code>
```