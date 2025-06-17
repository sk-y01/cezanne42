// 반복문
// while, do - while, for
// for
// - "조건식"이 만족할 때까지 특정 코드를 반복
// 작성 방법 
// {
// 	for (초기값; 조건; 증가/증감식) {
//		 실행문;
//	 }
// }

// 배열 (즉, 데이터)에 의한 방식
// for ( in )
// for ( of )
// forEach ()

// 0 ~ 100까지 출력하는 프로그램을 작성하세요.
{
	// for (let i = 0; i <= 100; i++) {
	// 	console.log('i :: ', i);
	// }
}

// 3의 배수를 출력하세요.
{
	for (let i = 1; i < 10; i++) {
		// console.log(`3 * ${i} = ${3 * i}`);
		if (i % 3 === 0) {
			console.log('3의 배수 :: ', i);
		}
	}
}

// document.addEventListener('DOMContentLoaded', () => {
// 	// li를 10개까지 만들어서 출력
// 	const ulEl = document.createElement('ul');

// 	for (let i = 0; i < 10; i++) {
// 		const liEl = document.createElement('li');
// 		liEl.textContent = `list-${i + 1}`;

// 		// 짝수 클릭하면 console.log(liEl.textConent);
// 		if((i + 1) % 2 === 0) {
// 			liEl.addEventListener('click', () => {
// 				console.log(liEl.textConent);
// 			});
// 		}

// 		ulEl.appendChild(liEl);
// 	}

// 	document.body.appendChild(ulEl);
// });


// for문을 통해서 배열 값 가져오기
// - 배열의 개수를 가져오려면 ? 배열명.length
// - 배열을 접근하려면 ? 배열명[index number]
{
	const students = ['Park', 'Kim', 'Lee', 'Kang'];

	for (let i = 0; i < students.length; i++) {
		console.log('students :: ', students[i]);
	}
}

// colors 배열 내 요소를 콘솔에 출력
{
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (let i = 0; i < colors.length; i++) {
		console.log('colors :: ', colors[i]);
	}
}

// 1 ~ 30까지의 숫자 중
// 5의 배수일 때, 5의 배수라고 출력
// 7의 배수일 때, 7의 배수라고 출력
// 5의 배수이면서 7의 배수일 땐 5와 7의 공배수 라고 출력
// 콘솔에 출력하라 (단, i와 함께) = `` 사용
// {
// 	for (let i = 1; i <= 35; i++) {
// 		if (i % 5 === 0 && i % 7 !== 0) {
// 			console.log(`${i} 는 5의 배수`);
// 		} else if (i % 5 !== 0 && i % 7 === 0) {
// 			console.log(`${i} 는 7의 배수`);
// 		} else if (i % 5 === 0 && i % 7 === 0) {
// 			console.log(`${i} 는 5와 7의 공배수`);
// 		} else {
// 			console.log(`${i}`);
// 		}
// 	}
// }

// 데이터에 의한 방식
// for - in :: index number
// for - of
// forEach 

// for - in
// for - in은 객체, 배열 등 key, index number만 가져올 수 있다.
// key 또는 배열에 접근 시에 [] 반드시 사용.

// 작성 방식
// {
// 	for (변수 in 객체) {
// 		문장;
// 	}
// }

// 해당, 배열에서 배열 값 가져오기
// for - in 
{
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (let idx in colors) {
		if (idx < colors.length) {
			console.log('for - in colors :: ', colors[idx]);
		}
	}
}

// 객체 접근 방식
// 1. 객체명.key
// 2. 객체명[key]

// for - in 을 통해서 객체 접근
{
	const obj = {
		// key: value = property
		title: "깃허브 입문",
		pages: 272,
		finished: true
	}

	for (let key in obj) {
		console.log('value :: ', obj[key]);
	}
}

{
	const obj = {
		// key: value = property
		title: "깃허브 입문",
		pages: 272,
		finished: true
	}

	console.log(obj.title);
}


// for - of
// - 문자열이나 배열과 같은 반복 가능한 자료(iterator)에서 사용 가능
// 작성 방식
// {
// 	for (데이터 변수 of 배열명) {
// 		출력문;
// 	}
// }

{
	const colors = ['red', 'blue', 'green', 'white', 'black'];

	for (color of colors) {
		console.log('for of로 출력 :: ', color);
	}
}

{
	const numbers = [1, 2, 8, 10, 100, 95];

	for (let idx in numbers) {
		if (idx < numbers.length) {
			console.log('for - in numbers :: ', numbers[idx]);
		}
	}
}