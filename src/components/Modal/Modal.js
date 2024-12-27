import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링하지 않음

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* 모달 안쪽 클릭 시 닫히지 않도록 stopPropagation */}
                <button className="modal-close-button" onClick={onClose}>
                    ✖
                </button>
                {children} {/* 자식 컴포넌트를 렌더링 */}
            </div>
        </div>
    );
}

export default Modal;
