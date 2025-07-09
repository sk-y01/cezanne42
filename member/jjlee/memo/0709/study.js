// 생성자 함수
// 생성자 함수로 생성된 데이터 : 객체 (Object)
// - 사용 이유 ? :: 코드 작성 양이 줄어 들고, 메모리 관리 효율 증가

// 객체
{
	const user = {
		firstName: 'jeongjae',				// Property :: key, value 의 한 쌍
		lastName: 'Lee',
		getFullName: function() {			// 객체 내 함수 = Methods(메서드)
			return `${this.firstName} ${this.lastName}`;
		}
	};

	// const copyUser = Object.assign({}, user); // Object.assign() 메서드를 통한 얕은 복사
	// const copyUser2 = {...user};	// 전개 연산자 얕은 복사

	console.log('user :: ', user);	// 객체 호출
	console.log('user 내 메서드 호출 :: ', user.getFullName()); // getFullName() 메서드 호출
}

// 생성자 함수
// 1. function 
// 2. class
{
	// 생성자 함수명은 반드시, 첫글자 대문자로 작성
	// 1. function 사용
	function User(first, last) {
		this.firstName = first;
		this.lastName = last;
	}

	const jjlee = new User('jeongjae', 'lee');
	console.log('jjlee :: ', jjlee);
}

// this
// - 일반 함수 (function) 는 호출 위치에 따라 this 정의
// - 화살표 함수는 선언된 함수 범위에서 this 정의
// - 객체 내에선 화살표 함수로 메서드 정의 시, this 키워드 사용 불가
{
	const user = {
		name: 'jjlee',
		normal() {
			return this.name;								// result :: jjlee
		},
		normal2() {
			console.log('축약형 작성');
		},
		arrow: () => {
			console.log('화살표 :: ', this.name); // result :: undefined
		}
	};
	console.log('normal :: ', user.normal());
	console.log(user.arrow());
}

{
	function NewBook(title, pages, done) {
		this.title = title;
		this.pages = pages;
		this.done = done;
		this.finish = () => {
			return this.done;
		}
	};

	const book1 = new NewBook('제목', 990, true);
	console.log('book1 :: ', book1.finish());
}

// 클래스
// 작성 방법
// - 클래스명도 반드시, 첫글자 대문자 !!!
{
	// class 클래스명 {
	// 	constructor(매개변수1, 매개변수2, ...) {
	// 	}
	// 	methods1() {
	// 	}
	// 	methods2() {
	// 	}
	// 	...
	// }
}
{
	class NewBook {
		constructor(title, pages, done) {
			this.title = title;
			this.pages = pages;
			this.done = done;
		}
		finish = () => {
			return this.done;
		}
	}

	const book1 = new NewBook('제목', 990, true);
	console.log('출력 :: ', book1);
	console.log('book1 :: ', book1.finish());
}

// 상속
{
	class Vehicle {
		constructor(name, wheel) {
			this.name = name;
			this.wheel = wheel;
		}
		getFullVehicle() {
			return `${this.name} ${this.wheel}`;
		}
	};

	// extends :: 확장 (상속)
	class Bicycle extends Vehicle {
		constructor(name, wheel) {
			// super(인수) :: 확장된 클래스 사용 (즉, 부모 클래스 사용)
			super(name, wheel);
		}
	}

	const myBicycle = new Bicycle('삼천리 자전거', 2);
	console.log('myBicycle :: ', myBicycle);

	
	class Car extends Vehicle {
		// name, wheel은 상속 받은 매개변수
		// license는 새로운 매개변수 (상속 X)
		constructor(name, wheel, license) {
			super(name, wheel);
			this.license = license;
		}
	}
	
	const myCar = new Car('K7', 4, true);
	console.log('myCar :: ', myCar);
	console.log('getFullVehicle :: ', myCar.getFullVehicle());
}