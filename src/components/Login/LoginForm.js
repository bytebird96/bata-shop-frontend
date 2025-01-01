import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import './LoginForm.css';

function LoginForm() {
    const [loginId, setLoginId] = useState(''); // loginId 상태 관리
    const [password, setPassword] = useState(''); // loginId 상태 관리
    const inputRef = useRef(null); // input 요소에 대한 참조 생성

    const handleLogin = () => {
        if (!loginId.trim() || !password.trim()) {
            inputRef.current.focus(); // loginId가 비어 있으면 포커스 이동
        } else {
            console.log('로그인 시도:', loginId);
            //axios.post('/login', inputRef);


        }
    };

    return (
        <div className="login-form">
            <h2>로그인/회원가입</h2>
            <p>🔒 모든 데이터는 암호화됩니다</p>
            <input
                type="text"
                placeholder="이메일 또는 전화번호"
                className="login-input"
                id="loginId"
                ref={inputRef} // input 요소와 ref 연결
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)} // 상태 업데이트
            />
            <input
                type="text"
                placeholder="패스워드"
                className="login-input"
                id="password"
                ref={inputRef} // input 요소와 ref 연결
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
            />
            <button className="login-button" onClick={handleLogin}>계속</button>
            <p>다른 방법으로 로그인:</p>
            <div className="login-options">
                <button>카카오</button>
                <button>Google</button>
                <button>Facebook</button>
            </div>
            <p className="login-footer">
                계속하면 <a href="#terms">이용 약관</a> 및 <a href="#privacy">개인정보 보호정책</a>에 동의하게 됩니다.
            </p>
        </div>
    );
}

export default LoginForm;
