// JSON
// - 데이터 형식
// - 객체 형태
// - (,) 로 구분해 여러 개의 프로퍼티 나열 가능
// - 이름 즉, key 부분에 반드시 ""
{
	// "key": value,
	// "key": value,
	// ...
}

// 이름이 '도레미'라는 학생의 수업 신청 정보를 담고 있는 객체 표현
{
	// 일반 객체로 표현
	const user = {
		name: '도레미',
		major: '컴퓨터공학',
		grade: 2
	};

	// JSON으로 표현
	const jsonUser = {
		"name": "도레미",
		"major": "컴퓨터공학",
		"grade": 2
	};
}

// JSON 이름에는 공백(' ') 또는 하이픈(-), 언더바(_) 사용 가능
{
	const jsonUser = {
		"name": "도레미",
		"full_name": "이도레미",
		"full-name": "이도레미",
		"full name": "이도레미",
		"major": "컴퓨터공학",
		"grade": 2
	};
}

// JSON 값
// - Number, String, Boolean, null, Array, Object 등 전부 가능

// - 숫자형 (Number)
// - 정수, 실수 모두 사용 가능 (단, 8진수, 16진수 불가)
// - ex) 48, -72, 25.8, -8.4, 2.3e4, ....

// - 문자형 (String)
// - 문자열은 항상 더블 쿼터("") 사용
// - ex) "자바스크립트", "HTML5", ...
{
	// JSON
	const jsonUser = {
		"name" : "도레미",
		"major" : "컴퓨터 공학",
		"course" : ["웹 기초", "자바스크립트"],
		"address" : {
			"city" : "대전광역시"
		}
	};
}

// API
// - 비동기 통신

// ES5
// - XMLHttpRequest()

// ES6 이상부터
// fetch()
// - Javascript 기본 제공

// axios()
// - 외부 라이브러리
// - 설치 : npm install axios

// 응답 (response) => 약어 : res
// 요청 (request) => 약어 : req

// fetch()
// 작성 방법
// {
// 	fetch('서버 URL')
// 	.then((response) => {
// 		// prototype 내 json() 메서드 호출
// 		response.json();
// 	})
// 	.then(data => {
// 		// 실행문
// 	});
// }

{
	document.addEventListener('DOMContentLoaded', () => {
		const container = document.querySelector('.container')
				, ulEl = container.querySelector('ul');

		// API 호출
		fetch('https://fakestoreapi.com/products')
		.then(res => res.json())
		.then(data => {
			data.map(dataEl => {
				const price = ((dataEl.price) * 1385).toFixed();	// 달러 -> 원화 로 변경
				ulEl.innerHTML += `
					<li>
						<p>${dataEl.title}</p>
						<p>${price}원</p>
						<p><img src=${dataEl.image} alt=${dataEl.title} style="max-width: 100px;"></p>
					</li>
				`;
			});
		})
		.catch(err => console.log(err));
	});
}