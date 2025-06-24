// 함수
// - 동작해야 할 목적대로 여러 개의 명령을 묶는 것

// 함수를 사용해야 하는 이유
// - 함수로 분리해놓을 경우, 필요할 때마다 원하는 기능만 따로 실행 가능
// - 재사용성
// - 문제가 조금 더 복잡해지거나 처리해야 할 기능이 많다면, 기능별로 나누는 것이 좋음.

// 작성 방법
// {
// 	function 함수명() {
// 		명령(들);
// 	}
// }

// 함수 호출 방법
// - 함수 호출 시 반드시, 함수명 뒤에 () 작성해야 함.
// {
// 	함수명();
// }

// 함수 이름을 적는 이유
// - 나중에 이름을 사용해서 함수를 실행하기 위해

// 문제. 1부터 10까지 더 하는 프로그램을 함수를 통해 작성하세요.
{
	function calcSum() {
		let sum = 0;

		for(let i = 0; i <= 10; i++) {
			sum += i;
		}
		console.log('1부터 10까지 더 한 결과 :: ', sum);
	}
	
	calcSum();	// 함수 호출
}

// 매개변수
// - 함수 선언 시, 외부에서 받는 값
// - 여러개의 매개변수가 필요할 시, 매개변수 사이에 (,)를 넣으면 된다.

// 매개변수에 이름을 붙이는 방법
// - 일반적인 변수 이름을 붙이는 방법과 같음.

// 인수
// - 매개변수가 있는 함수 호출 시, 실제로 값을 넣어 넘겨주는 것
{
	// a, b :: 매개변수
	function sum(a, b) {
		let result = a + b;

		return result;
	}
	// 10, 20 :: 인수
	sum(10, 20);
}

// 문제. 매개변수와 인수를 사용해 1부터 n까지 더하는 프로그램을 작성하세요.
{
	function calcSum(n) {
		let sum = 0;

		for(let i = 0; i <= n; i++) {
			sum += i;
		}
		console.log('1부터 ' + n + ' 까지 더하면 ' + sum + '입니다.');
	}

	calcSum(10);
}

// return문
// - 함수에서 실행 후 결과까지 처리 가능하나, 함수의 실행 결과를 받아 다시 처리해야 할 경우가 많다.
// - 함수의 결과 값을 반환 할 때 사용
// - return 다음에 넘겨줄 값이나 변수 지정
{
	function calcSum(n) {
		let sum = 0;

		for(let i = 0; i <= n; i++) {
			sum += i;
		}
		return sum;
	}

	let num = Number(prompt('몇까지 더할까요 ??', ''));

	document.addEventListener('DOMContentLoaded', () => {
		document.body.innerHTML += `1부터 ${num}까지 더 하면 ${calcSum(num)}`;	// num :: 인수
	});
}

// 기본 매개변수
// - 예를 들어, 매개변수가 3개인 multiple() 정의
// - 실행 시, 2개나 1개의 매개변수만 지정하면 ? -> 에러는 나지 않음.
// - 값을 전달받지 못 한 매개변수의 값 : undefined -> NaN 반환

// - ES6부턴 함수 정의 시, 매개변수의 기본값 지정 가능
// - 함수 실행 시, 인수가 부족하면 기본 값을 사용

// 매개변수의 기본값 지정
{
	function multiple(a, b = 5, c = 10) {
		return a * b + c;
	}

	console.log(multiple(5, 10, 20)); // result :: a = 5, b = 10, c = 20
	console.log(multiple(10, 20));		// result :: a = 10, b = 20, c = 10 (default)
	console.log(multiple(10));				// result :: a = 10, b = 5 (default), c = 10 (default)
}