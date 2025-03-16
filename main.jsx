// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //디폴트다

createRoot(document.getElementById('root')).render(
  // <StrictMode> 개발 모드로 코드를 실행할 때 내부적으로 검사해 잠재적 오류를 알려주는 것.
  <App />
  // </StrictMode>,
)
