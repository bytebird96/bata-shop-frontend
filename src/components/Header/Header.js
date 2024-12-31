import React from 'react';
import './Header.css';

function Header({ onLoginClick }) {
    return (
        <header className="header">
            <div className="header-left">
                <img src="http://localhost:8080/bata-shop/images/main.webp" alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <a href="#bestseller" className="header-link">베스트셀러</a>
                    <a href="#new" className="header-link">신상품</a>
                    <a href="#category" className="header-link dropdown">카테고리 ▾</a>
                </nav>
            </div>
            <div className="header-search">
                <input type="text" placeholder="핸드폰 케이스" className="header-search-input" />
                <button className="header-search-button">🔍</button>
            </div>
            <div className="header-right">
                <button className="header-login-button" onClick={onLoginClick}>
                    로그인/회원가입
                </button>
                <a href="#order" className="header-link">주문 & 계정</a>
                <a href="#support" className="header-link">지원 센터</a>
                <a href="#cart" className="header-link">🛒</a>
            </div>
        </header>
    );
}

export default Header;
