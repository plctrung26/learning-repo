import { useState } from 'react';
import { Button, Drawer, DrawerProps, Tooltip } from 'antd';
import './ShowDrawerButton.scss'

interface CustomDrawerProps extends DrawerProps {
    children?: React.ReactNode;
    openButtonText?: string;
    openButtonIcon?: React.ReactNode;
    submitButtonText?: string
    toolTipTitle?: string
    drawerTitle?: string
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ drawerTitle, toolTipTitle, children, openButtonText, openButtonIcon, submitButtonText, ...drawerProps }) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Tooltip title={toolTipTitle}>
                <Button onClick={showDrawer} icon={openButtonIcon} shape='circle' className='show-drawer-button'>
                    {openButtonText}
                </Button>
            </Tooltip>

            <Drawer {...drawerProps} title={drawerTitle} onClose={onClose} open={open} footer={<Button >{submitButtonText}</Button>}>
                {children}
            </Drawer>
        </>
    );
};

export default CustomDrawer;