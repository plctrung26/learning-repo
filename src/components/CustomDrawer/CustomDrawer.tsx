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

const CustomDrawer = (
    {
        onSubmit,
        openButtonShape,
        drawerTitle,
        toolTipTitle,
        children,
        openButtonText,
        openButtonIcon,
        submitButtonText,
        ...drawerProps
    }: CustomDrawerProps) => {

    const { isOnTop, setIsOnTop } = useGlobalStore()

    useEffect(() => {
        if (isOnTop === true) {
            const drawerBody = document.querySelectorAll('.ant-drawer-body')
            if (drawerBody) {
                drawerBody.forEach(element => {
                    element.scrollTop = 0;
                });
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