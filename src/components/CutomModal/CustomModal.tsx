import React, { useState } from 'react';
import { Button, Modal, ModalProps, Tooltip } from 'antd';

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
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Tooltip title={toolTipTitle}>
                <Button onClick={() => setModalOpen(true)} icon={openButtonIcon} shape={openButtonShape ?? undefined}>
                    {openButtonText}
                </Button>
            </Tooltip>

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