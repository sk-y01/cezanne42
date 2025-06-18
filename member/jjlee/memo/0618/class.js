// for : 단순 조건식까지 반복
// for ~ in, for ~ of, forEach : 데이터
// data 기반의 반복문
// - 조건문 없음, 초기값도 없음, 증가치도 없음, 데이터의 길이만큼 반복
{
	const numbers = [10, 20, 30, 40, 50, 60];
	// numbers 안에 순서 값들을 idx로 전달
	// 데이터 길이만큼 반복하나 데이터를 전달하는 것이 아닌 데이터가 가진 인덱스 번호 반환
	for (let idx in numbers) {
		console.log(idx);						// result : 0, 1, 2, 3, 4, 5 (인덱스 번호만 출력)
		console.log(numbers[idx]);	// result : 10, 20, 30, 40, 50, 60
	}
	// 데이터 길이만큼 반복, 데이터를 매개변수에 직접 전달
	for (let num of numbers) {
		console.log('num :: ', num);
	}
	// for in, for of를 결합한 방식의 반복문
	// - 인덱스 번호, 데이터를 직접 반환, 원본 배열의 반환
	// 배열.forEach(callback);
	// callback(data, index, array)
	numbers.forEach((num, idx, arr) => {
		console.log('index :: ', idx);
		console.log('data :: ', num);
		console.log('array :: ', arr);
	});
}

// 문제. for문으로 1 ~ 100 짝수 합계 구하기
{
	let sum = 0;
	for (let i = 1; i <= 100; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	console.log('sum :: ', sum);
}

// 문제. for문으로 글자 색상을 포함하여 HTML에 출력하세요.
{
	document.addEventListener('DOMContentLoaded', () => {
		const colors = ['red', 'green', 'blue', 'yellow', 'skyblue'];
	
		for (let i = 0; i <= colors.length; i++) {
			document.body.innerHTML += `
				<span style="color: ${colors[i]}">안녕하세요</span>
			`;
		}
	});
}

// 이중 for문
// - for문 안에 for문 존재

// 문제. 이중 for문으로 구구단 만들기
{
	for (let i = 2; i <= 9; i++) {
		for (let j = 1; i <= 9; j++) {
			console.log(`${i} * ${j} = ${i * j}`);
		}
	}
}

// 문제. 5줄 20개로 별 찍기
{
	document.addEventListener('DOMContentLoaded', () => {
		for (let i = 1; i <= 5; i++) {
			for (let j = 1; j <= 20; j++) {
				document.body.innerHTML += '*';
			}
			// 20개 다 찍으면 줄 바꿈.
			document.body.innerHTML += '<br>';
		}
	});
}

// break문
// - for, while, switch 문에서 특정한 문장을 실행 후
// - 즉각 중지
{
	for (let i = 1; i < 10000; i++) {
		if (i === 10) {
			break;
		}
		console.log(`hi :: ${i}`);
	}
}

{
	for (let i = 1; i <= 5; i++) {
		if (i === 3) {
			break;
		}
		console.log('i :: ', i);	// result :: 1, 2
	}
}

// continue 문
// - 반복문에서만 사용
// - 다음 문장을 실행하지 않는다. (Jump)
// - 그리고, 조건식 재검사
{
	for (let i = 1; i <= 10; i++) {
		if (i % 2 === 0) {
			continue;
		}
		console.log(`number odd :: ${i}`);
	}
}

// return 문
// - break와 유사하나 최종 값 반환 후 중지