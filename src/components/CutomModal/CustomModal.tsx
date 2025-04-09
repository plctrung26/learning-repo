import React from 'react';
import { Modal, ModalProps } from 'antd';

interface CustomModalProps extends ModalProps {
    children?: React.ReactNode;
    openButtonText?: string;
    openButtonIcon?: React.ReactNode;
    submitButtonText?: string
    modalTitle?: string
    openButtonShape?: "default" | "circle" | "round" | undefined
    toolTipTitle?: string
}

const CustomModal: React.FC<CustomModalProps> = ({ toolTipTitle, openButtonShape, modalTitle, children, openButtonText, openButtonIcon, submitButtonText, ...ModalProps }) => {

    return (
        <>
            <Modal
                title={modalTitle}
                centered
                {...ModalProps}
            >
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;