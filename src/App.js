import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
//import { increment, decrement } from './redux/slices/counterSlice'; // Redux slice에서 가져오기
import Header from './components/Header/Header'; // Header 컴포넌트 가져오기
import Main from './components/Main/Main';//Main 컴포넌트 가져오기
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'; // 모달 컴포넌트
import LoginForm from './components/Login/LoginForm'; // 로그인 폼 컴포넌트

function App() {
    //나중에 장바구니에서 사용 예정 Redux 예제에 맞춰서 일단 작성
    const count = useSelector((state) => state.counter.value); // Redux 상태 가져오기
    const dispatch = useDispatch(); // Redux 액션 디스패치
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="App">
            <Header onLoginClick={() => setIsModalOpen(true)} /> {/* 로그인 클릭 */}
            <Main />
            <Footer />
            {/*로그인 Modal */}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <LoginForm />
                </Modal>
            )}
        </div>
    );
}

export default App;