//총 스터디 기간 3월 28일
//했지만 다시 해보고 싶은 것들 위주로 간단하게 하고 react로 바로 넘어가자 3월 15일(deadline)
//섹션 4,5,6 3시간 32분 분량 3월 17일(deadlline)
//섹션 7,8,9,10,11,12 3시간 18분 분량 3월 20일(deadline)
//섹션 13 5시간 41분 분량 3월 24일(deadline)
//여유시간 4일 만약 늦어진다 하더라도 3월 28일엔 끝내기
// 자료형: 간단하게 알아 보자.


//3월 13일 목 시작


// NaN: not a number 연산에 이상한 걸 집어 넣을 때 발생한다.
let nan = NaN;

//${}: 이거으 정식 명칭은 탬플릿 리터럴 문법이라고 한다. 모르고 썼다.

// 1.6 형 변환
let str = "10개"
let numstr = parseInt(str) //number를 쓸 수도 있지만 그냥 parseint가 전체적으로 쓸 때 좋다 밑과 같이
console.log(str)

//1.13 콜백함수: 코드로 이해해보자
function main(value) {
    value();
}
function sub() {
    console.log("sub")
}
main(sub); //이를 콜백 함수라고 한다. // 메인으로 간다. sub함수가 인수에 있다. sub함수를 인수에 넣는다. value();가 sub();가 된다. 따라서 console.log("sub")에 해당하는 것을 실행시키고 sub를 출력한다.

//콜백함수 예제
function main2(value) {
    console.log(1) // 원하는 만큼 출력하고 콜백함수를 출력할 수 있다.
    console.log(2)
    value(); //파이썬에서도 비슷한 걸 경험했다.
}
function sub2() { //콜백 함수
    console.log("i am sub")
}

main2(sub2);

function main3(value) {
    value(); //인수를 함수로 받고 인수() 이건 인수의 함수를 출력한다는 의미
}

main3(function sub() {
    console.log
});

function repeat(count) {
    for (let idx = 0; idx <= count; idx++) {
        console.log(idx)
    }
}
repeat(5)

function repeatDouble(count, callback) {
    for (let idx = 0; idx <= count; idx++) {
        callback(idx); //여기서 idx를 전달 받는다. 처음 idx가 0되고 함수에 0전달 그 후idx가 1이 되고 함수에 1전달을 반복한다.
    }
}
repeatDouble(5, function (idx) { //이건 굳이 idx가 아니더라도 괜찮은 거 알지? 인수를 idx로 받는 건 위에서 확정이고 여기선 그 idx를 어떤 이름으로 저장할지 정하는 것
    console.log(idx * 10)
}) //만약 여기서 또 repeatTriple이런 식으로 반복되는 걸 만들면 딱히 좋은 방향은 아니다. 따라서 콜백함수를 써보자.

repeatDouble(5, (내마음대로) => {
    console.log(내마음대로 * 15)
})



// 3월 14일 금 시작



//처음에 자료형에서 원시형만을 알아 봤다. 이번엔 객체에 대해서도 알아보자. 1.15
let obj1 = new Object(); //객체 생성자: 잘 안 사용한다. 처음 본다. 내가 느끼기에도 사용하기 싫게 생겼다.)
let obj2 = {}; //익숙하다. 이걸 써야겠다.

let person = { //실수하면 안 되는 거 여기서 name: "kwon", age: 27 이건 객체가 아니다 이미 질리도록 배웠다. 실수하면 딱밤
    name: "kwon",
    age: 20,
    "age age": 27,
    function: function name(params) {
        console.log("함수가 오든 객체 리터럴이 한 번 더 오든 상관 없는 거 알지?")
    }
};

//객체의 프로퍼티(속성)를 다루는 방법/ 강의에선 프로퍼티라 카지만 난 속성이라고 하겠다.
let name = person.name; //스코프 범위 알고 있지? 함수 안과 밖에서의 let은 같은 값 한 번씩 가능.
let age = person["age"]; // 파이썬에선 이런 식으로 많이 했다 난 이게 익숙하다.

//새로운 속성을 다루는 방법
person["favoriteFood"] = "crab"

//속성 수정 방법
person["favoriteFood"] = "kingKrab"

//속성 삭제 방법
delete person["favoriteFood"];
console.log(person);

//속성 존재 유무 확인하는 방법
let result = "name" in person; //오 이건 처음 본다. 유튜브는 거르고 인프런을 요긴하게 쓰자.
console.log(result); // 값은 불리언으로 출력하겠지?

//객체 2 / 1.16

//상수 객체/ 여기서도 못 배운 디테일들이 있다.
const animal = {
    name: "고야미",
    type: "물 속성",
    color: "흰색"
};

//animal = { a: 123 } //(오류가 나기에 주석 처리)상수에 해당하는 animal자체는 바꿀 수 없다. 하지만
animal["type"] = "산책 속성" //이렇게 animal에 해당하는 속성들은 바꿈, 수정 및 삭제가 가능하다.

//메서드: 객체 속성 중 함수인 것.
let person2 = {
    say: function (say) {
        console.log(say)
    },
    say(say) {
        console.log(say)
    } //이런 형태는 또 처음 본다. 근데 난 function이나 화살표가 좋다. 또한 메서드가 될 때만 가능하다. 이점도 모르겠고 괜히 햇갈린다. 아직은 지양하는 편이 좋겠다.
}
person2["say"]("니 똥꼬") // 여기서 ("니 똥꼬")는 []뒤에 붙인다.

//배열: 객체와의 차이점은 순차적으로 다룬다는 것. 1.17
let arr = new Array(); // 아까 객체와 마찬가지로 지양하겠다.
let arr2 = []; //지향하겠다.

let arr3 = [1, 2, 3, true, "hello", null, undefined, function name10(glg) {
    console.log(`얘도 다양한 속성들을 쓸 수 있다.${glg}`)
}] // 객체와 달리 index로 구별하는 건 알지? key:value, index:value(0부터 시작 알지?)
let arr4 = arr3[7]("힣")
console.log(arr4)

// 자바스크립트 심화: 이건 생소한 게 좀 있는 거 같아 다 본다.
//2.1 Truthy, Falsy 자바스크립트에선 참, 거짓이 아닌 값도 참, 거짓으로 평가한다. 모호하다 코드를 통해 알아보자.
if (123) { //()여기의 조건이 참이여야 "참"을 출력한다. 근데 조건이 없고 값만 있다. 이때 참 같은 값이라고 볼 수 있다. 이건 메인페이지 구현할 때 쎴다. 값이 있으면 실행할 수 있게  
    console.log("참")
}
else {
    console.log("거짓")
}

if (undefined) { //여기서 undefined는 딱 봐도 느낌이 거짓 같은 값으로 보인다. 이때 else 부분이 출력되겠다. 
    console.log("참")
}
else {
    console.log("거짓")
}
//이제 falsy한 값들은 뭐가 더 있나
let f1 = undefined //f1-6은 딱 봐도 꼬롬하게 생김 f7은 큰 수를 다룰 때 쓰는 거.
let f2 = null
let f3 = 0
let f4 = -0
let f5 = NaN
let f6 = "" //빈 문자열은 falsy인데 빈 객체나 배열은 아니다. 이 점 유의하자.
let f7 = 0n
if (!f1) {
    console.log("falsy")
}

//truthy한 값들=> falsy한 값들 외에 모든 것들 예를 들자면
let t1 = []
let t2 = {}
let t3 = function () { }
if (t3) {
    console.log("truthy")
}

//활용 사례
function person4(person3) {
    if (person3) {
        console.log(person3)
    }
    else {
        console.log("입력하라고고고고고고곡곡")
    }
}
let person3 = { name: "" } //오 근데 이건 또 else를 탄다. {}이거라고 무지성 truthy가 아니라 {}안에서도 속성을 꺼내올 때 ""이걸로 감싸졌다면 falsy를 출력하고 다른 falsy도 마찬가지일 것이다. 아님 말고
person4(person3.name)

//2.2 단락 평가: 논리 연산식에서 두 값을 쓰는데 하나의 값으로 뒤의 값은 보지 않아도 true, false가 정해진다면 뒤의 값은 보지 않고 실행한다는 것.
//a && b일 때 a에서 false라면 b는 보지도 않고 실행 안 함.
//a || b애서 a가 true라면 뒤의 값은 보지도 않고 실행함. 실습을 해보자.
function returnFalse() {
    console.log("False 함수")
    return false;
}
function returnTrue() {
    console.log("True 함수")
    return true;
}
console.log(returnFalse() && returnTrue()); //console.log에서 조건에 따라 false를 출력했다. 이 뜻은 뒤의 값에 접근 자체를 안 해 함수 출력이 안 됐다.
console.log(returnTrue() && returnFalse()); //여기선 뒤에 접근하겠지?? 당연하지?? 그렇겠지??
//또한 return값을 truthy, falsy한 값들에도 적용되겠지????????????????

function printName(person) {
    const name = person && person.name
    console.log(name || "값이 없다니까?") //오.. 이런 식으로도 가능 name에서 없다면 falsy겠고 뒤의 값을 출력한다..
    // 만약 T||T면 앞의 T가 반환된다. 또한 T&&T면 뒤의 T가 반환된다. 아까의 것과 결이 다르긴 하지만 정서는 같다. 조금만 생각하면 이해된다.
    if (person) {
        console.log(person) //이건 내가 자주 쓰던 방식 오 근데 person이라고 하니까 아무 일도 안 일어나고 person.name이라고 하니까 오류가 나버린다. 관계가 있지 싶다. 하지만 여기까지만 알자.
    }
}
printName();

//구조 분해 할당: 객체나 배열의 값들을 분해하여 다른 변수에 할당한다는 뜻. 코드를 통해 알아보자.

//배열의 구조 분해 할당
let arr5 = [1, 2, 3];
let one = arr5[0];
let two = arr5[1];
let three = arr5[2]; //보기만 해도 귀찮아보인다. 만약 이렇게 해야 한다면 어차피 오염이 되었어야 함
let [one1, two2, three3, four4] = arr5; //와 쓰 깔끔하다.
console.log(one1, two2, three3);
console.log(one1, two2); //이러면 그냥 three3은 출력 안 되고
console.log(one1, two2, three3, four4); //이러면 [one1, two2, three3, four4] 여기서 let arr5 = [1, 2, 3];여긴 이것만 있기에 undefined가 나온다.

//객체의 구조 분해 할당: 위의 배열에선 꽤나 요긴하게 쓰일 수 있을 거 같은데 객체에선 키 값도 있는데 굳이? 싶다. 
let person5 = { //얘는 굳이 오염되지 않아도 될 것을 오염시킴
    name6: "kwon",
    hobby: "eat food",
}
let { name6, hobby } = person5 //오 키를 쓸 때는 숫자를 써도 자동으로 문자열로 변환되지만 키를 불러올 때는 숫자를 ""안에다가 써야 함
console.log(name6, hobby) //근데 이러면 원래 스코프가 오염 안 될 거 위에서 아주 조금의 수고를 덜겠다고 오염시킨다. 딱히 편한 것도 모르겠다. 난 차라리 조금 불편하고 스코프를 안 더럽히는 쪽을 선택하겠다.


//3월 15일 시작


//2.4 Spread 연산자 & Rest 매개변수