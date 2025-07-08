// 데이터 불변성 (Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, function
// ---------------------------------------------------------------------
// |1:		1				|2:			4			|3:			7			|4:
// ---------------------------------------------------------------------

// 자바스크립트 데이터의 불변성
// 새로운 원시 데이터 사용 시, 그 원시 데이터가 있다면 기존 메모리 주소에 들어있다면 
// 새로 만드는 것이 아닌 기존 존재하는 메모리 주소만 바라봄.

// 원시 데이터의 경우, 최초 메모리에 생성되면 항상 불변
// -> 쉽게 말하면 생긴 것이 다르면 그냥 다른 데이터
{
	let a = 1;	// 첫번째 메모리 주소를 바라본다.
	let b = 4;	// 두번째 메모리 주소를 바라본다.
	console.log('a === b', a, b, a === b);	// result :: 1, 4, false

	b = a;	// b는 a의 메모리 주소를 바라본다. (대입)
	console.log(a, b, a === b); // result :: 1, 1, true

	a = 7;
	console.log(a, b, a === b); // result :: 7, 1, false

	let c = 1;
}

// 참조형 데이터
// - 불변성 X
// - 복사 개념이 아닌 메모리 주소만 같은 곳을 바라보게 만듦. = 참조
// ---------------------------------------------------------------------
// |1:	{ k: 1 }		|2:		{ k: 1 }			|3:					|4:
// ---------------------------------------------------------------------
{
	let a = { k: 1 };
	let b = { k: 1 };
	// let a = [1];
	// let b = [1];
	console.log(a, b, a === b === c); // result :: { k: 1 }, { k: 1 }, false
	// 이유 : a, b는 서로 다른 메모리 주소를 바라보고 있기 때문

	a.k = 7;
	// b = c = a;
	// console.log('a, b, c, a === b === c', a, b, c, a === b === c);
	b = a;
	console.log(a, b, a === b); // result :: { k: 7 }, { k: 7 }, true

	a.k = 2;
	console.log('a, b, a === b', a, b, a === b); // result :: { k: 2 }, { k: 2 }, true

	let c = b;
	console.log('a, b, c, a === c', a, b, c, a === c);

	a.k = 9;
	console.log('a, b, c :: ', a, b, c,);
}

// 얕은 복사
{
	const user = {
		name: 'jjlee',
		age: 32,
		emails: ['st20916@naver.com']
	};

	const copyUser = user;	// copyUser는 user를 참조

	user.age = 27;
	console.log('user :: ', user);					
	// result :: {name: 'jjlee', age: 27, emails: Array(1)}
	console.log('copyUser :: ', copyUser);	
	// result :: {name: 'jjlee', age: 27, emails: Array(1)}

	// 문제점 : user의 age 값만 변경한 줄 알았으나, copyUser의 값도 같이 수정됨.
	// 이유 : copyUser와 user는 같은 메모리 주소를 바라보고 있다. (참조하고 있다.)

	// 1. Object.assign(대상 객체, 출처 객체);
	// - 대상 객체에 출처 객체를 여러가지 속성들을 담아 반환 (새로운 객체 반환)
	// const assignUser = Object.assign(user);	// 참조
	const assignUser = Object.assign({}, user); // 얕은 복사
	// const assignUser = Object.assign({ age: 28 }, user); // 얕은 복사

	console.log(assignUser === user); // result :: false
	console.log(assignUser);

	// 2. 전개 연산자(Spread Operator)를 통한 복사
	const spreadUser = {...user};
	console.log('spreadUser :: ', spreadUser);
	console.log('true ? false ? :: ',	spreadUser === user); // result :: false

	spreadUser.emails.push('st20916@kakao.com');
	// result :: { name: 'jjlee', age: 27, emails: Array(2) }
}