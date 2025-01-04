import React, { useState } from 'react';
import './SignupForm.css'; // 스타일 추가

function SignupForm({ onSwitchToLogin }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleSignup = () => {
        if (!email || !phone || !password || !userName) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        console.log('회원가입 정보:', { email, phone, password, userName });
        onSwitchToLogin(); // 회원가입 후 로그인 폼으로 전환
    };

    return (
        <div className="signup-form">
            <h2>회원가입</h2>
            <input
                type="text"
                placeholder="이름"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="전화번호"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>회원가입</button>
            <button onClick={onSwitchToLogin}>취소</button>
        </div>
    );
}

export default SignupForm;
