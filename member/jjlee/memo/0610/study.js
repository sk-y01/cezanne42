// if문 복습
// 문제. 월을 입력받아 계절을 표시해주는 프로그램을 작성해보자.
{
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
}

// 문제. 웹 사이트에서 회원 아이디와 회원 레벨에 따라 콘텐츠에 접근 가능한 지를 판정하는 프로그램을 작성해보자.
// 아이디가 admin일 경우, 콘텐츠에 접근 가능하다는 메시지를 출력
// 그렇지 않을 경우, 회원 레벨을 입력 받는다.
// 회원 레벨이 1 ~ 7일 경우, 콘텐츠에 접근 가능 메시지를 출력하고, 프로그램 종료
// 그렇지 않을 경우, 콘텐츠 접근 불가능 메시지 출력 후 프로그램 종료
{
	document.addEventListener('DOMContentLoaded', () => {
		const idFunc = () => {
			const userId = prompt('아이디를 입력하세요.', '');

			// if (userId === '' || userId === null || userId === undefined) {
			// 	location.reload();
			// } else {
			// 	if (userId === 'admin') {
			// 		document.body.textContent = '해당, 컨텐츠 이용이 가능합니다.';
			// 	} else {
			// 		const level = Number(prompt('회원 레벨을 입력하세요.', ''));
					
			// 		if (level >= 1 && level <= 7) {
			// 			document.body.textContent = '해당, 컨텐츠 이용이 가능합니다.';
			// 		} else {
			// 			document.body.textContent = '해당, 컨텐츠 이용이 불가능합니다.';
			// 		}
			// 	}
			// }
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
	});
}

// 문제. 아르바이트 주간 또는 야간 근무와 근무 시간에 따른 아르바이트 급료 계산하는 프로그램을 작성.
// 단, 주간인지 야간인지는 입력 받는다.
// 아르바이트 시급 : 10,030원
// 근무 시간은 8시간으로 지정한다.
// 야간의 경우, 1.5배를 더 받는다고 가정한다.
// 단, 결과는 HTML에다가 출력하세요.
{
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
}

// 문제. 음식 값과 고객 만족 상태를 입력 받아 음식점 직원 서비스에 대한 고객 만족도에 따라 팁을 계산하는 프로그램을 작성하세요.
// 입력 받는 항목 : 음식 값, 고객 만족 상태
// 고객 만족 상태는 1: 매우 만족, 2: 만족, 3: 불만족으로 표현
// 팁 계산
// 매우 만족 : 15%
// 만족 : 10%
// 불만족 : 5%
// 단, 결과는 HTML에다가 출력하세요.
// 출력 항목 : 음식 값, 만족도, 팁

{
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
}

// 조건 연산자 (= 삼항 연산자)
{
	let small, num1, num2;
	// 아래의 if문을 조건 연산자로 바꾸어 작성하세요.
	if (num1 < num2) {
		small = num1;
	} else {
		small = num2;
	}
}
// 정답 : small = (num1 < num2) ? num1 : num2;