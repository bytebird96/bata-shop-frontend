import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlice'; // Redux slice에서 가져오기
import Header from './components/Header/Header'; // Header 컴포넌트 가져오기
import Main from './components/Main/Main';//Main 컴포넌트 가져오기
import Footer from './components/Footer/Footer';

function App() {
    const count = useSelector((state) => state.counter.value); // Redux 상태 가져오기
    const dispatch = useDispatch(); // Redux 액션 디스패치

    return (
        <div className="App">
            <Header />
            {/* 추가적인 화면 구성 요소는 여기서 작성 */}
            <main>
                <Main />
            </main>
            <Footer />
        </div>
    );
}

export default App;