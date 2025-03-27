import { Button, Drawer, DrawerProps } from 'antd';
import './ShowDrawerButton.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeDrawer } from '../../redux/drawerSlice';

interface CustomDrawerProps extends DrawerProps {
    children?: React.ReactNode;
    openButtonText?: string;
    openButtonIcon?: React.ReactNode;
    submitButtonText?: string
    toolTipTitle?: string
    drawerTitle?: string
    openButtonShape?: "default" | "circle" | "round" | undefined
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ openButtonShape, drawerTitle, toolTipTitle, children, openButtonText, openButtonIcon, submitButtonText, ...drawerProps }) => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.drawer.isDrawerOpen)

    return (
        <>
            <Drawer {...drawerProps}
                title={drawerTitle} onClose={() => dispatch(closeDrawer())}
                open={isOpen}
                footer={<Button >{submitButtonText}</Button>}>
                {children}
            </Drawer>
        </>
    );
};

export default CustomDrawer;