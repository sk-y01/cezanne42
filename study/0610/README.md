# 2025.06.10

## 참여자
```
이정재, 박수림, 정경호, 이하늘

17:30 - 19:00
```

## 스터디 내용
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
		// 문제. 월을 입력받아 계절을 표시해주는 프로그램을 작성해보자.
		
		const monthFunc = () => {
			const month = Number(prompt('월을 입력하세요.', ''));
			if (month < 1 || month > 12) {
				alert('월을 잘못 입력했습니다. 다시 입력하세요.');
				location.reload();
			} else if (month >= 3 && month <= 5) {
				alert(month + '은 봄입니다.');
			} else if (month >= 6 && month <= 8) {
				alert(month + '은 여름입니다.');
			} else if (month >= 9 && month <= 11) {
				alert(month + '은 가을입니다.');
			} else {
				alert(month + '은 겨울입니다.');
			}
		};
	// monthFunc();
	</code>
```

```
	<code>
		// 문제. 웹 사이트에서 회원 아이디와 회원 레벨에 따라 콘텐츠에 접근 가능한 지를 판정하는 프로그램을 작성해보자.
		// 아이디가 admin일 경우, 콘텐츠에 접근 가능하다는 메시지를 출력
		// 그렇지 않을 경우, 회원 레벨을 입력 받는다.
		// 회원 레벨이 1 ~ 7일 경우, 콘텐츠에 접근 가능 메시지를 출력하고, 프로그램 종료
		// 그렇지 않을 경우, 콘텐츠 접근 불가능 메시지 출력 후 프로그램 종료
		const idFunc = () => {
			const userId = prompt('아이디를 입력하세요.', '');

			if (userId === '' || userId === null || userId === undefined) {
				location.reload();
			} else if (userId === 'admin') {
				document.body.textContent = '해당, 컨텐츠 이용이 가능합니다.';
			} else {
				const level = Number(prompt('회원 레벨을 입력하세요.', ''));
					
				if (level >= 1 && level <= 7) {
					document.body.textContent = '해당, 컨텐츠 이용이 가능합니다.';
				} else {
					document.body.textContent = '해당, 컨텐츠 이용이 불가능합니다.';
				}
			}
		};
		// idFunc();
	</code>
```

```
	<code>
		// 문제. 아르바이트 주간 또는 야간 근무와 근무 시간에 따른 아르바이트 급료 계산하는 프로그램을 작성.
		// 단, 주간인지 야간인지는 입력 받는다.
		// 아르바이트 시급 : 10,030원
		// 근무 시간은 8시간으로 지정한다.
		// 야간의 경우, 1.5배를 더 받는다고 가정한다.
		// 단, 결과는 HTML에다가 출력하세요.
		document.addEventListener('DOMContentLoaded', () => {
			document.body.innerHTML += `<h2 class="title mt-20">주간인 지 야간인 지 판별 후 아르바이트 하루 급여 계산</h2>`;

			const workFunc = () => {
				const hourPay = 10030
						, workTime = 8
						, dayNight = prompt('주간, 야간 중 입력하세요.', '');
				let totalPay = 0;
		
				if (dayNight === '주간') {
					totalPay = hourPay * workTime;
				} else if (dayNight === '야간') {
					totalPay = hourPay * workTime * 1.5;
				} else {
					alert('잘못된 입력입니다. 다시 입력하세요.');
					location.reload();
				}
				document.body.innerHTML += `${dayNight} 아르바이트의 하루 급여는 ${totalPay}이다.`;
			}; // end workFunc
		// workFunc();
		});
	</code>
```

```
	// 문제. 음식 값과 고객 만족 상태를 입력 받아 음식점 직원 서비스에 대한 고객 만족도에 따라 팁을 계산하는 프로그램을 작성하세요.
	// 입력 받는 항목 : 음식 값, 고객 만족 상태
	// 고객 만족 상태는 1: 매우 만족, 2: 만족, 3: 불만족으로 표현
	// 팁 계산
	// 매우 만족 : 15%
	// 만족 : 10%
	// 불만족 : 5%
	// 단, 결과는 HTML에다가 출력하세요.
	// 출력 항목 : 음식 값, 만족도, 팁
	document.addEventListener('DOMContentLoaded', () => {
		document.body.innerHTML += `<h2 class="title mt-20">음식점 직원 서비스에 대한 고객 만족도에 따라 팁을 계산하는 프로그램</h2>`;

		const serviceFunc = () => {
			const price = Number(prompt('음식 값을 입력하세요.', ''))
					, service = prompt('고객 만족도를 입력하세요. 1: 매우 만족, 2: 만족, 3: 불만족', '');
			let tip = 0, serviceResult = '';

			if (service === '1') {
				serviceResult = '매우 만족';
				tip = price * 0.15;
			} else if (service === '2') {
				serviceResult = '만족';
				tip = price * 0.1;
			} else if (service === '3') {
				serviceResult = '불만족';
				tip = price * 0.05;
			} else {
				alert('만족도를 다시 입력하세요.');
				location.reload();
			}
			document.body.innerHTML += `음식 값은 ${price}원이고, 고객 만족도는 ${serviceResult}이며, 팁은 ${tip}원이다.`;
		};	// end serviceFunc
		// serviceFunc();
	});
```

```
	// 조건 연산자 (= 삼항 연산자)
	let small, num1, num2;
	// 아래의 if문을 조건 연산자로 바꾸어 작성하세요.
	if (num1 < num2) {
		small = num1;
	} else {
		small = num2;
	}

	// 정답 : small = (num1 < num2) ? num1 : num2;
```