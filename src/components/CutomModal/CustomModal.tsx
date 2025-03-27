import React from 'react';
import { Modal, ModalProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeModal } from '../../redux/modalSlice';

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

    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    return (
        <>
            <Modal
                title={modalTitle}
                centered
                open={isOpen}
                onOk={() => dispatch(closeModal())}
                onCancel={() => dispatch(closeModal())}
                footer={false}
                {...ModalProps}
            >
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;