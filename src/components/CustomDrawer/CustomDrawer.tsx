import { Button, Drawer, DrawerProps } from 'antd';
import './ShowDrawerButton.scss'
import { useDispatch } from 'react-redux';
import { closeArticleDrawer } from '../../redux/articleStore/articleDrawerSlice';

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

    return (
        <>
            <Drawer {...drawerProps}
                title={drawerTitle} onClose={() => dispatch(closeArticleDrawer())}
                footer={<Button >{submitButtonText}</Button>}>
                {children}
            </Drawer>
        </>
    );
};

export default CustomDrawer;