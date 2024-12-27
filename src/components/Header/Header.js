import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src="https://via.placeholder.com/40x40" alt="Logo" className="header-logo" />
                <nav className="header-nav">
                    <a href="#bestseller" className="header-link">베스트셀러</a>
                    <a href="#hotdeal" className="header-link">발점 5점</a>
                    <a href="#special" className="header-link">새해특가</a>
                    <a href="#new" className="header-link">신상품</a>
                    <a href="#category" className="header-link dropdown">카테고리 ▾</a>
                </nav>
            </div>
            <div className="header-search">
                <input type="text" placeholder="핸드폰 케이스" className="header-search-input" />
                <button className="header-search-button">🔍</button>
            </div>
            <div className="header-right">
                <a href="#login" className="header-link">로그인/회원가입</a>
                <a href="#order" className="header-link">주문 & 계정</a>
                <a href="#support" className="header-link">지원 센터</a>
                <a href="#cart" className="header-link">🛒</a>
            </div>
        </header>
    );
}

export default Header;