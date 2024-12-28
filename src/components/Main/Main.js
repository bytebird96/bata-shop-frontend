import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Main.css';

function Main() {
    //상품
    const [products, setProducts] = useState([]);
    //로딩 상태 구현
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //API 호출
        axios.get('http://localhost:8080/api/products')
            .then((response) => {
                setProducts(response.data.content); // 상품 데이터 설정
                setLoading(false);
            })
            .catch((error) => {
                console.error('상품 데이터를 가져오는 중 오류 발생:', error);
                setLoading(false);
            })
    },[]);

    if(setLoading){
        return <p>로딩 중...</p>;
    }

    return (
        <div className="main">
            <h1>"검색어"에 대한 결과</h1>
            <div className="product-grid">
                {products.map((product,index) => (
                    <div key={index} className="product-card">
                        <img
                            src={product.image || `https://via.placeholder.com/150x100?text=Product+${index + 1}`}
                            alt={product.name}
                            className="product-image"
                        />
                        <div className="product-info">
                            <p>{product.name}</p>
                            <p className="product-price">₩{product.price.toLocaleString()}</p>
                            <p className="product-sales">{product.evaluation}점</p>
                        </div>
                    </div>
                ))}
                {/*{Array.from({ length: 8 }).map((_, index) => (*/}
                {/*    <div key={index} className="product-card">*/}
                {/*        <img*/}
                {/*            src={`https://via.placeholder.com/150x100?text=Product+${index + 1}`}*/}
                {/*            alt={`Product ${index + 1}`}*/}
                {/*            className="product-image"*/}
                {/*        />*/}
                {/*        <div className="product-info">*/}
                {/*            <p>제품 이름 {index + 1}</p>*/}
                {/*            <p className="product-price">₩{(10000 + index * 3000).toLocaleString()}</p>*/}
                {/*            <p className="product-sales">{index + 1}k+ 판매</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    );
}

export default Main;
