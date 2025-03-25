import React, { useState } from 'react';
import { Button, Modal, ModalProps } from 'antd';

interface CustomModalProps extends ModalProps {
    children?: React.ReactNode;
    openButtonText?: string;
    openButtonIcon?: React.ReactNode;
    submitButtonText?: string
    modalTitle?: string
}

const CustomModal: React.FC<CustomModalProps> = ({ modalTitle, children, openButtonText, openButtonIcon, submitButtonText, ...ModalProps }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setModalOpen(true)}>
                {openButtonText}
            </Button>
            <Modal
                title={modalTitle}
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={false}
                {...ModalProps}
            >
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;