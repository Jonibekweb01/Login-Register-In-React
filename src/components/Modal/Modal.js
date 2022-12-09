import { useEffect, useRef } from 'react';
import './modal.css';

export const Modal = ({ setCreatePostModal, createPostModal, children, title }) => {
    const overlayRef = useRef()
    const handleCloseModal = (evt) => {
        if (evt.target === overlayRef.current) {
            setCreatePostModal(false)
        }
    }
    useEffect(() => {

        if (createPostModal) {
            window.addEventListener('keydown', function (evt) {
                if (evt.key === "Escape") {
                    setCreatePostModal(false)
                }
            });
        }

        return () => window.removeEventListener('keyup', function (evt) {
            if (evt.key === "Escape") {
                setCreatePostModal(false)
            }
        })
    }, [createPostModal])
    return (
        <>
            <div ref={overlayRef} onClick={handleCloseModal} className="overlay ">
                <div className="bg-light w-50 p-5 rounded">
                    <div className="modal-header">
                        <h3 className="">{title}</h3>
                        <button onClick={() => setCreatePostModal(false)} className="btn btn-danger">&times;</button>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
