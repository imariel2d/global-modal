import React, { useRef } from 'react';

import { Modal, ModalMethods } from './Modal';

export const App = () =>{
    const ref = useRef<ModalMethods>(null);

    return (
        <div className="App">
            <button onClick={() => ref.current?.open()}>Click me</button>
            <Modal ref={ref} defaultOpen={true}>
                <h1>Hello world</h1>
            </Modal>
        </div>
    );

}