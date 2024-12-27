import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="login-form">
            <h2>로그인/회원가입</h2>
            <p>🔒 모든 데이터는 암호화됩니다</p>
            <input type="text" placeholder="이메일 또는 전화번호" className="login-input" />
            <button className="login-button">계속</button>
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
