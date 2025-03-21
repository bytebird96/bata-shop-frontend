import React, { useState, useRef } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm({ onSwitchToSignup }) {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);
    const inputRef = useRef(null);

    const handleLogin = async () => {
        if (!loginId.trim()) {
            inputRef.current.focus();
        } else {
            try {
                const response = await axios.get(
                    `http://172.31.10.110:8080/bata-shop/api/auth/isUserExist?userId=${loginId}`
                );
                if(response.data.result == "ERROR"){
                    console.error(response.data.code);
                    alert(response.data.code);
                    inputRef.current.focus();
                }else if(response.data.result == "FAIL"){
                    alert("존재 하지 않는 회원 입니다.");
                    onSwitchToSignup();
                }else{
                    setIsPasswordInputVisible(true);
                }
            } catch (error) {
                console.error('Error checking user existence:', error);
                alert('로그인 중 오류가 발생했습니다.');
            }
        }
    };

    const handlePasswordSubmit = () => {
        if (!password.trim()) {
            alert('비밀번호를 입력해주세요.');
            return;
        }

        





        // 비밀번호 검증 로직 추가
        console.log('로그인 성공:', { loginId, password });
    };

    return (
        <div className="login-form">
            <h2>{isPasswordInputVisible ? '비밀번호 입력' : '로그인/회원가입'}</h2>
            {!isPasswordInputVisible && (
                <input
                    type="text"
                    placeholder="이메일 또는 전화번호"
                    className="login-input"
                    ref={inputRef}
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
            )}
            {isPasswordInputVisible && (
                <input
                    type="password"
                    placeholder="비밀번호"
                    className="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            )}
            <button
                className="login-button"
                onClick={isPasswordInputVisible ? handlePasswordSubmit : handleLogin}
            >
                {isPasswordInputVisible ? '로그인' : '계속'}
            </button>
            {!isPasswordInputVisible && (
                <p className="login-footer">
                    아직 계정이 없으신가요?{' '}
                    <button className="signup-link" onClick={onSwitchToSignup}>
                        회원가입
                    </button>
                </p>
            )}
        </div>
    );
}

export default LoginForm;
