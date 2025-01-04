import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import LoginForm from './components/Login/LoginForm';
import SignupForm from './components/Login/SignupForm'; // 회원가입 폼 추가

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const [isLoginForm, setIsLoginForm] = useState(true); // 로그인/회원가입 상태

    const handleModalClose = () => {
        setIsModalOpen(false);
        setIsLoginForm(true); // 로그인 폼으로 초기화
    };

    const switchToSignupForm = () => setIsLoginForm(false); // 회원가입 폼으로 변경
    const switchToLoginForm = () => setIsLoginForm(true); // 로그인 폼으로 변경

    return (
        <div className="App">
            <Header onLoginClick={() => setIsModalOpen(true)} />
            <Main />
            <Footer />
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                    {isLoginForm ? (
                        <LoginForm onSwitchToSignup={switchToSignupForm} />
                    ) : (
                        <SignupForm onSwitchToLogin={switchToLoginForm} />
                    )}
                </Modal>
            )}
        </div>
    );
}

export default App;
