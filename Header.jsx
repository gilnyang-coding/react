function Header() { //함수의 첫 번째는 꼭 대문자로 쓰자
    const name = "kwon's react"
    return ( //자식 컴퍼넌트
        //jsx: 이는 js extention이며 js가 html을 반환할 수 있게 한다. 
        <>
            <header>
                <h1>{name}힣</h1>
            </header>
        </>
    )
}

export default Header;