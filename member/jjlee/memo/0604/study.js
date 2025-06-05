// 문자열끼리 비교
// - 문자열의 경우, ASCII Code 값을 통해 비교
// - 대체적으로 소문자가 대문자보다 ASCII 값이 높음.
// - 문자열 내 문자가 여러 개일 경우, 맨 앞에서부터 하나씩 비교
{
	console.log("A" > "B");	// false
	console.log("Javascript" > "JAVASCRIPT"); // true
}


// 논리 연산자
// - 참과 거짓을 피연산자로 하는 연산자
// - true, false
// 보통, 참과 거짓을 이용해 조건을 체크할 때 사용

// !
// - NOT 연산자 : 피연산자의 반대 값을 가짐.

// &&, || -- 둘 다 좌측 피연산자부터 시작.

// &&
// - AND 연산자 : 모두 true일 경우에만 true
// - 첫 번째가 true면, 두번째 피연산자를 반환
{
	const hour = 12, minute = 30;

	if (hour === 12 && minute === 30) {
		console.log('현재 시각은 12시 30분입니다.');
	}

	console.log(true && true);		// result :: true
	console.log(false & true);		// result :: false
	console.log(true && false);		// result :: false
	console.log(false && false);	// result :: false

	// 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false
	if (1 && 0) {
		console.log('if 문 안에 falsy가 들어가 있으므로 console에 찍히지 않습니다.');
	}

	console.log(1 && 2 && null && 3); // result :: null 반환
	console.log(1 && 2 && 3);					// result :: 3 반환
	console.log(1 && 0);							// result :: 0 반환
	console.log(1 && 5);							// result :: 5 반환
	console.log(null && 5);						// result :: null 반환
}

// ||
// - OR 연산자 : 둘 중 하나만 true여도 true
{
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
}


// 제어문

// 조건문
// if문
// - if 다음에 소괄호를 사용해 조건을 표기
// - 조건 체크 후, 결과 값이 true면 실행문 실행
// - false면 실행문 건너뜀.
{
	// if (조건) {
	//	 조건이 true일 때, 실행문;
	// }
}
{
	const x = 10;
	if (x > 5) {
		console.log('x는 5보다 큽니다.');
	}
}
{
	const y = 10;
	if (y < 5) {
		console.log('y는 5보다 작습니다.');
	}
	y -= 5;
	// 결과는 5 반환
	// 이유 : if문에서 조건 체크 결과 false 이므로, 그 다음 문장인 y -= 5 실행
}

// if - else문
// - 조건을 체크한 후, true일 때 처리할 명령(실행문) 과 false일 때 처리할 명령(실행문)이 
// - 따로 있다면, if - else 문 사용
// - if - else 문 안에 또 다른 if - else문 사용 가능
{
	// if (조건) {
	//	 조건이 true 일 때, 실행문;
	// } else {
	//	 조건이 false 일 때, 실행문;
	// }
}

// 프롬프트 창에서 취소 버튼 클릭했는 지 체크하는 프로그램을 작성하세요.
{
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
}

// if - else if - else문
// - 1개의 값을 여러 조건으로 체크해야 할 때 사용
// - 앞에서 제시한 조건들이 맞지 않을 경우, else문을 사용한다.
// {
//	 if (조건 1) {
//		 조건1이 맞을 때, 실행문;
//	 } else if (조건 2) {
//		 조건2가 맞을 때, 실행문;
//	 } else {
//		 어떤 조건에도 맞지 않을 때, 실행문;
//	 }
// }


// 조건(삼항) 연산자
// - 조건이 복잡하지 않고, true와 false가 명확할 경우, if문 대신 조건 연산자로 조건 체크
// {
//	 (조건) ? true 일 때 실행문 : false 일 때 실행문;
// }


// 문제. 프롬프트로 점수를 입력 받고
// 점수가 90점 이상이면 A
// 점수가 80점 이상이면 B
// 그 외의 점수면 C 를 주는 프로그램을 작성하세요.
// 단, null일 경우, 다시 입력할 수 있도록 하세요.
{
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
}

// 문제. 프롬프트로 숫자를 입력 받고
// 짝수인 지, 홀수인 지 판별하는 프로그램을 작성하세요.
// 단, 취소 버튼 클릭했는 지 확인 후, 클릭하지 않았을 때 조건이 진행되도록 하세요.
// 짝수인 지 홀수인 지 판별은 삼항(조건)연산자로 작성하세요.
{
	const number = Number(prompt('숫자를 입력하세요.'));

	if (number !== null) {
		(number % 2 === 0) ? console.log(`${number}는 짝수입니다.`) : console.log(`${number}는 홀수입니다.`);
	}
}