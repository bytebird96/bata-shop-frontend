import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>회사 정보</h3>
                    <ul>
                        <li><a href="#!">bata-shop 소개</a></li>
                        <li>bata-shop - 면접 과제 제출용</li>
                        <li>작업자 : bytebird96</li>
                        <li><a href="#!">이메일 문의하기</a></li>
                        <li><a href="#!">이력서 정보</a></li>
                        <li><a href="#!">경력</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>제작자 정보·고지사항</h3>
                    <p>
                        Git: <a href="https://github.com/bytebird96/bytebird96.git" target="_blank" rel="noopener noreferrer">
                        https://github.com/bytebird96/bytebird96.git
                    </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
