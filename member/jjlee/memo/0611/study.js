// switch문
// - 체크해야 할 조건 값이 많을 경우에 사용
// - switch문 안에 있는 case문에서 각 값에 따라 실행할 명령을 따로 구분
// - switch문에 있는 조건은 case 중 하나에만 일치하고, case를 실행한 후에는 완전히 switch문을 빠져 나온다.
// - 지정한 case문에 맞지 않으면 default문에 있는 실행문 실행
{
	// switch (조건) {
	//	 case 값:
	//		 문장;
	//	 break;
	//	 case 값:
	//		 문장;
	//	 break;
	//	 ...
	//	 default:
	//		 문장;
	// }
}

// 문제. 사용자가 3개의 과목 중에서 하나를 선택하여 입력한 후, 체크하는 프로그램을 작성하세요.
// 단, 취소 처리 즉, null 값이 아닐 때 체크할 수 있도록 하세요.
{
	function inputFunc() {
		let subject = prompt('신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript', '');

		if (subject !== null) {
			switch(subject) {
				case '1':
					console.log('HTML을 신청했습니다.');
				break;
				case '2':
					console.log('CSS를 신청했습니다.');
				break;
				case '3':
					console.log('Javascript를 신청했습니다.');
				break;
				default:
					console.log('잘못 입력했습니다. 다시 입력해 주세요.');
				break;
			}
		}
	} // end inputFunc()
	// inputFunc();
}

// 문제. 즐겨 사용하는 포털 검색 사이트를 입력 받아, 해당 사이트를 입력하면, 이동하는 프로그램을 작성하세요.
{
	const siteFunc = () => {
		const site = prompt('네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?', '');
		let url = '';

		switch(site) {
			case '네이버':
				url = 'https://www.naver.com';
			break;
			case '다음':
				url = 'https://www.daum.net';
			break;
			case '네이트':
				url = 'https://www.nate.com';
			break;
			case '구글':
				url = 'https://www.google.com';
			break;
			default:
				alert('보기에 없는 사이트입니다.');
			break;
		}

		if (url) {
			location.href = url;
		}
	}
	// siteFunc();
}

// 2개 이상 조건 체크하기
// - 2개 이상의 조건을 체크해야 할 경우, 논리 연산자를 사용해 조건식을 만들어서 체크
// - OR 연산자
// - AND 연산자
// - NOT 연산자

// 문제. 입력한 숫자가 모두 짝수인 지 체크
{
	const func = () => {
		const num1 = Number(prompt('첫번째 양의 정수 : '));
		const num2 = Number(prompt('두번째 양의 정수 : '));
		let str = '';

		if (num1 % 2 === 0 && num2 % 2 === 0) {
			str = '두 수 모두 짝수입니다.';
		} else {
			str = '짝수가 아닌 수가 있습니다.';
		}
		console.log('str :: ', str);
	}
	// func();
}