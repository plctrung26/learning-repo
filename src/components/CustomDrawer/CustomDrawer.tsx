import { Button, Drawer, DrawerProps } from 'antd';
import './ShowDrawerButton.scss'
import { useEffect } from 'react';
import useGlobalStore from '../../store/useGlobalStore';

interface CustomDrawerProps extends DrawerProps {
    children?: React.ReactNode;
    openButtonText?: string;
    openButtonIcon?: React.ReactNode;
    submitButtonText?: string
    toolTipTitle?: string
    drawerTitle?: string
    openButtonShape?: "default" | "circle" | "round" | undefined
    onSubmit: () => void
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ onSubmit, openButtonShape, drawerTitle, toolTipTitle, children, openButtonText, openButtonIcon, submitButtonText, ...drawerProps }) => {
    const { isOnTop, setIsOnTop } = useGlobalStore()

    useEffect(() => {
        if (isOnTop === true) {
            const drawerBody = document.querySelector('.ant-drawer-body') as HTMLDivElement;
            if (drawerBody) {
                drawerBody.scrollTop = 0;
            }
            setIsOnTop(false);
        }
    }, [isOnTop, setIsOnTop]);

    return (
        <>
            <Drawer {...drawerProps}
                title={drawerTitle}
                width={'500px'}
                footer={<Button
                    onClick={onSubmit}
                    style={{
                        width: "100%"
                    }}>{submitButtonText}</Button>}>

                {children}


            </Drawer >
        </>
    );
};

export default CustomDrawer;