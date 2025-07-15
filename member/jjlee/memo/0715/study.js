// 객체
// - 
// 얕은 복사
// 1. Object.assign({}, 복사할 객체);
// 2. {...object}
{
	
}

// 배열
// 얕은 복사
// [...array]
{
	// 얕은 복사 함수
	const shallowCopy = (data) => {
		let result = null;

		// 배열도 typeof로 찍으면 object이기 때문에 아래와 같이 정의
		// data라는 매개변수가 배열 여부 확인
		// Array.isArray()
		if (Array.isArray(data)) {
			result = [...data];
		} else if (!Array.isArray(data) && typeof data === 'object') {
			// 배열이 아니면서 data type이 object인 경우
			result = {...data};
		}
		return result;
	}

	// 배열
	const array = [1, 2, 3, 4, 5];
	// array의 얕은 복사
	const newArray = [...array];
	// 함수를 통해 얕은 복사
	const funcArray = shallowCopy(array);

	// 배열 요소 삽입
	// push() : 맨 뒤에
	// unshift() : 맨 앞에 (0번 인덱스)
	newArray.push(6);
	funcArray.unshift(7);
	
	console.log('array : ', array); // result :: [1, 2, 3, 4, 5]
	console.log('newArray : ', newArray); // result :: [1, 2, 3, 4, 5, 6]
	console.log('funcArray :: ', funcArray);	// result :: [7, 1, 2, 3, 4, 5]

	
	// 배열 요소 순회
	// funcArray의 요소를 하나씩 출력해보자.
	// map(callback)
	// 유사 : forEach(callback)
	
	// 작성 방법
	// map <- 배열 메서드
	// {
	// 	배열명.map((data, index, array) => { 실행문 });
	// }

	// forEach <- 데이터면 가능
	// for - in 과 for - of 를 합친 것
	// {
	// 	데이터명.forEach((data, index, array) => { 실행문 });
	// }

	// 차이점
	// map() : 새로운 배열을 반환
	// forEach() : 값을 반환하지 않고, 반복만 함.
	// - 새로운 값을 할당을 해줘야 함.
	// const resultArray = funcArray.map(arr => { 
	// 	return arr;
	// });
	// const resultArray = funcArray.map(arr => (arr));
	
	// 축약형
	const resultArray = funcArray.map(arr => arr);
	console.log('resultArray : ', resultArray);

	const result = [];	// 빈 배열
	funcArray.forEach(arr => {
		result.push(arr);
	});
	console.log('result : ', result);
}

{
	// filter(callback)
	// - 배열 데이터의 아이템들을 특정한 기준에 의해 필터링
	// - 필터 된 데이터들을 "새로운 배열"로 반환
	// - 즉, 원본 데이터에는 영향이 없다.
	const number = [1, 2, 3, 4];	// 원본 배열 데이터

	// 특정한 기준 :: 조건식 필요
	// 배열명.filter((data, index, array) => 조건식);

	// 3 이상의 요소(데이터)를 배열로 반환해보자.
	const resultNumber = number.filter(num => (
		num >= 3
	));
	console.log('resultNumber : ', resultNumber); // result : [3, 4]


	// find(callback)
	// - 주어진 판별 함수를 만족하는 첫번째 요소 반환, 없으면 undefined 반환
	// - 조건식 필요
	// 배열명.find(data => 조건식);
	const findArray = number.find(num => (
		num < 3
	));
	console.log('findArray : ', findArray); // result : 1
}

// 배열 구조 분해 할당
{
	const number = [1, 2, 3, 4]; // 원본 데이터

	const [num1, num2] = number;
	const [num3, num4, ...num5] = [...number];
	// 풀어쓰면 ? const [num1, num2] = [1, 2, 3, 4];
	console.log('num1, num2 : ', num1, num2); // result : 1, 2
	console.log('num3, num4, num5 : ', num3, num4, num5); // result : 1, 2, [3, 4]
}

// 객체 구조 분해 할당
{
	const user = {
		name: 'jeongjae',
		age: 32
	};	// 원본 객체 데이터

	// 구조 분해 할당
	// 반드시, key로 할당
	const { name, age } = user;
	// 이해를 돕기 위해 ?? : const { name, age } = { user.name, user.age }
	console.log('name, age : ', name, age);

	// 별칭 (alias)
	// 별칭으로 선언한 건 별칭으로 출력
	const { name: jjlee, age: age2 } = user;
	console.log('name, age : ', jjlee, age2);

	const user2 = {
		user1 : {
			name: 'jjlee'
		}
	};

	const user3 = { user1 : { name : 'jjlee' } }
}