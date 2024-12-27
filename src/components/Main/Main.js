import React from 'react';
import './Main.css';

function Main() {
    return (
        <div className="main">
            <h1>"검색어"에 대한 결과</h1>
            <div className="product-grid">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="product-card">
                        <img
                            src={`https://via.placeholder.com/150x100?text=Product+${index + 1}`}
                            alt={`Product ${index + 1}`}
                            className="product-image"
                        />
                        <div className="product-info">
                            <p>제품 이름 {index + 1}</p>
                            <p className="product-price">₩{(10000 + index * 3000).toLocaleString()}</p>
                            <p className="product-sales">{index + 1}k+ 판매</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
