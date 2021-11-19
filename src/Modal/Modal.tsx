import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

const elementModal = document.createElement('div');
document.body.insertBefore(elementModal, document.body.firstChild);

interface Props {
    defaultOpen?: boolean,
    children?: any,
}

export interface ModalMethods {
    open: () => void,
    close: () => void,
}

export const Modal = forwardRef<any, Props>(({ children, defaultOpen = false }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    useImperativeHandle(ref, (): ModalMethods => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }));

    const modalJSX = (
        <div className="my-modal">
            <div className="my-modal content">
                {children}
            </div>
            <button
                className="my-modal close"
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
        </div>
    );

    const whatShouldRender = isOpen ? modalJSX : null;

    return createPortal(
        whatShouldRender,
        elementModal,
    );
});
