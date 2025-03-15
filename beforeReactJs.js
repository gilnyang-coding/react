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
person["favoriteFood"] = "kingCrab"

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
//spread: 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr6 = [1, 2, 3];
// 만약 arr6의 값을 arr7의 4,5 사이로 다 집어 넣고 싶을 때 let arr7=[4,arr6[0], arr[1], arr[2], 5, 6]; 이런 식으로 해야 하는데 귀찮고 위험하다. 왜냐? arr6에서 값이 사라졌는데 인덱스로 없어진 값을 불러오라는 문법을 만들 수 있게 되니까.
let arr7 = [4, ...arr6, 5, 6]; //...이 spread이고 arr6의 모든 값을 넣는다. 이러면 위의 인덱스와 달리 arr6에서 뭐가 추가되거나 없어져도 그거에 맞게 값이 조정된다.
console.log(arr7)

let obj3 = {
    a: 1,
    b: 2,
}
let obj4 = {
    // a:obj3.a, 원래라면 이렇게 집어 넣을 것을
    ...obj3, //이렇게 한 번에 집어 넣을 수 있다.
    c: 3,
    d: 4,
}
console.log(obj4)

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3)
}
funcA(...arr6) //이거 넣을 때 ...안 붙이면 arr6이 통째로 p1에 드간다. ...을 붙여야 하나씩 p1,2,3에 드간다.

//Rest 매개변수: 나머지 매개변수.
function funcB(맨_처음, ...Rest) { //매개변수의 갯수가 6개나 된다. 다 쓰기 귀찮다. 따라서 ...을 쓴다.
    console.log(맨_처음 + "힣" + Rest + "힣") //${} 안에 ...을 넣을 수 없음 또한 출력할 때 ...은 빼야만 한다.
}
funcB(...arr7); //또한 굳이 ...Rest가 아니라 ...니똥꼬도 가능

//2.5 원시타입vs 객체타입. 깊은 복사 얕은 복사 말하는 거
let p1 = 1 //M(memory):001
let p2 = p1; //M:002
p2 = 2 //M:003

let o1 = {
    name: "kwon" //M:001
}
let o2 = o1 //M:002 //설마 얕은 복사할라는데 o1.name 요지랄은 안 하겠지? 이건 객체가 아니다.
o2.name = "k" //M:001
//그냥 쉽게 객체를 바꿀 때는 연동되어 연결된 값 모두 바뀐다. 
console.log(o1) //근데 이러면 좀 복잡할 수 있고 사이드 이펙트라고 의도치 않은 변경이 있을 수 있어 많이 쓰진 말자.
//얕은 복사를 방지하려면
let o3 = { ...o1 }; //이렇게 하면 o3가 바뀌어도 o1은 안 바뀐다.
o3.name = "kkkkk";
console.log(o1);
//객체간의 엄격한 비교 ===
o3 = { ...o1 }
o2 = o1
console.log(o1 === o2) //이건 참
console.log(o1 === o3) //이건 거짓 이유는 객체간의 엄격한 비교에선 참조값도 포함이기에 참조값이 다른 o1, o3는 거짓이 나온다.
console.log(o1 == o3) //아 여기서도 거짓이 나오네
console.log(JSON.stringify(o1) === JSON.stringify(o3)) //그냥 속성 값만을 비교하고 싶을 때는 객체를 문자열로 바꿔주는 내장 함수인 JSON.stringify()를 사용하면 된다.

// 2.6 반복문으로 배열과 객체 순회하기
let arr8 = [10, 20, 30] //기본 for 구조가 순회에 맞춰졌다.
for (let i = 0; i < arr8.length; i++) {
    console.log(arr8[i])
}
let arr9 = [4, 5, 6, 7, 8]
for (let index = 0; index < arr9.length; index++) {
    console.log(arr9[index])
}

//for of 반복문: 오직 배열을 순회하기 위한 것, 이건 파이썬의 for이랑 완전 같다. 그렇다고 객체는 사용할 수 없는 게 아니라 겍체를 배열로 바꾼 후 사용하면 된다.
for (let item of arr8) {
    console.log(item); //위의 for와 다른 것은 이건 index가 없어서 위의 index를 활용해서 하는 거에 제약이 있다.
}

//객체 순회
let person6 = {
    name: "kwon",
    age: "20",
    hobby: "coding"
};

// Object.keys(객체에서 key 값들만 뽑아 새로운 배열로 변환)
let inf = Object.keys(person6);
console.log(inf);

for (let i = 0; i < inf.length; i++) {
    console.log(inf[i])
};

for (const item of inf) {
    let value = person6[item]
    console.log(item + ": " + value)
}

// Object.values(객체에서 value 값들만 뽑아 새로운 배열로 변환)
let value = Object.values(person6)
for (let index = 0; index < value.length; index++) {
    console.log(value[index])
}

//for in: 여기서 key를 다른 걸로 바꾸든 value로 바꾸든 key를 출력한다.
for (const key in person6) {
    if (Object.prototype.hasOwnProperty.call(person6, key)) {
        console.log(key + "힣")
    }
}

// 2.7 배열 메서드 1.요소 조작(slice부터),2순회와 탐색 이건 그냥 html,css,javascript 폴더 11장을 보자.
//sliced: 특정 범위를 잘라내서 새로운 배열로 반환 (비파괴적 메서드)
let arr10 = [1, 2, 3, 4, 5];
let sliced = arr10.slice(2, 5) //(a,b)여기서 a는 0부터 시작 2인덱스 포함 그 뒤의 b까지 b는 1부터 시작한다. 따라서 3,4,5를 선택한다.
let sliced2 = arr10.slice(2)
console.log(sliced) //원본이 바뀌진 않는다. 자세한 건 html,css,javascript 폴더에서 검색하자. 요소 조작을 모두 정리했다.
console.log(sliced2)

//concat: 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let concatArr = arr9.concat(arr10)
console.log(concatArr)

// 2.9 배열 메서드 3, 배열 변형(다 하자) 
//filter
let arr11 = [{ name: "kwon" }]
let f = arr11.filter((item) => item.name === "kwon")
console.log(f)

//map: 배열의 모든 요소를 순회하면서 각각 콜벡 함수를 실행하고 그 결과들을 모아서 새로운 배열로 변환. 이는 foreach랑 같다. 다만, map는 리턴을 해줄 수 있다.
let mapresult = arr10.map((item, idx) => {
    console.log(idx + ": " + item)
    return item;
});
console.log(mapresult)

// 2.10 Date 객체와 날짜(시간을 여러 포맷으로 출력하기만 하기)
date = new Date()
console.log(date.toDateString()); //이러면 수가 아니라 문자열로 표시된다.
console.log(date.toLocaleString()); // 이러면 각 나라의 언어에 맞게 출력된다.

//2.11 동기(작업이 있을 때 순서대로 하나씩 처리하는 것)와 비동기() / 자바스크립트는 특정 함수가 아닌 이상 동기로 실행된다.
//만약 a가 처리하는데 10초가 걸리고 b가 처리하는데 0.1초가 걸린다고 하면 a를 처리하느라 다른 것들을 처리 못 하니 전체적인 성능이 악화되어버린다.
//또한 자바스크립트는 쓰레드(작업을 처리하는 인력)가 하나만 존재하여 멀티 쓰레드를 쓸 수 없다.
//따라서 비동기를 사용한다. 비동기는 여러 작업을 같이 한다는 점에서 멀티 쓰레드와 비슷하지만 비동기는 하나의 작업을 끝내지 않아도 다른 작업을 실행하면서 왔다갔다 실행한다. 출력은 비동기든 동기든 같다.
console.log(1)
setTimeout(() => {
    console.log(2)
}, 3000) //ms단위 / 쓰레드는 하난데 타이머와 그 뒤 처리를 같이?=> 비동기 함수를 만나면 자바스크립트가 web api에 타이머 기능을 처리해달라고 넘기고 web api는 처리하고 콜백함수도 같이 넘겨준다.
console.log(3)

//2.12 비동기 작업 처리하기 1. 콜백 함수
function task(a, b, callback) {  //이런 식으로도 할 수 있다.
    setTimeout(() => {
        let sum = a + b;
        callback(sum)
    }, 1);
}
task(1, 2, (value) => {
    console.log(value);
});

//음식을 주문하는 상황
function foodOrder(callback) {
    setTimeout(() => {
        let food = "치킨"
        callback(food)
    }, 1000)
}

// 치킨이 너무 뜨겁다. 식혀보자
function coolDownFood(food, callback) {
    setTimeout(() => {
        let coolDownedFood = `상온에 10분 둔 ${food}`
        callback(coolDownedFood)
    }, 1000)
}

function freezeFood(food, callback) {
    setTimeout(() => {
        let frozenFood = `냉동고에 둔지 3시간 뒤의 ${food}`
        callback(frozenFood)
    }, 1000);
}

foodOrder((food) => {
    console.log(`${food} 배달 완료`)

    coolDownFood(food, (coolDownedFood) => { //이 food는 위의 foodOrder에서 가져올 수 있다.
        console.log(`${coolDownedFood}이/가 식었다.`)

        freezeFood(food, (frozenFood) => {
            console.log(`${frozenFood}이/가 얼었다.`)
        })
    })

})

// 2.13 이후는 팀 프로젝트 이후 하자.