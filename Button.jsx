// function Button(props) {
//     return <button style={{ color: props.color }}>
//         {props.text}-{props.color.toUpperCase()} {/*감이 오지?*/}
// </button>
//} //근데 이렇게 하면 카페 버튼엔 color가 없어 그럼 undefind고 거기다가 만약 toUpperCase를 붙이면 오류가 나 따라서

function Button({ text, color = "black", children }) { // 여기서 구조 분해 할당으로 받아오고 없을 수도 있는 값에 없다면 디폴트 값을 넣어줘서 오류를 방지한다.
    return <button style={{ color: color }}>
        {text}-{color.toUpperCase()}-{children}
    </button>
}

export default Button;