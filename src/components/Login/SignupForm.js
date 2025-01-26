import React, { useState } from 'react';
import './SignupForm.css';
import axios from "axios"; // 스타일 추가

function SignupForm({ onSwitchToLogin }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleSignup = async () => {
        if (!email || !phone || !password || !userName) {
            alert('모든 필드를 입력해주세요.');
            return;
        }
        console.log('회원가입 정보:', { email, phone, password, userName });
        try {
            debugger;
            const response = await axios.post(
                `http://localhost:8080/bata-shop/api/auth/register`,
                {
                    password : password,
                    userName : userName,
                    email : email,
                    phone : phone
                }
            );
            console.log('서버 응답:', response.data);
        }catch(error) {
            console.error('회원가입 중 오류 발생:', error.response ? error.response.data : error.message);
            throw error;
        }
        //onSwitchToLogin(); // 회원가입 후 로그인 폼으로 전환
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
